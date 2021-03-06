var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Unit = (function () {
    function Unit(name, race) {
        this.name = name;
        this.race = race;
    }
    return Unit;
}());
var Recipe = (function (_super) {
    __extends(Recipe, _super);
    function Recipe(name, race, ingredients, tier) {
        var _this = _super.call(this, name, race) || this;
        _this.ingredients = ingredients;
        _this.tier = tier;
        return _this;
    }
    Recipe.prototype.getRecipeUnits = function (unitType, unitArray) {
        if (unitType == 'immediate') {
            return this.ingredients;
        }
        else if (unitType == 'basic') {
            var unitNode = new NodeItem(this, 1);
            var nodeList = unitNode.getDescendents(unitArray);
            return combineObjs(nodeList);
        }
        else if (unitType == 'magic') {
            var unitNode = new NodeItem(this, 1);
            var nodeList = unitNode.getDescendents(unitArray, true);
            return combineObjs(nodeList);
        }
    };
    return Recipe;
}(Unit));
var NodeItem = (function () {
    function NodeItem(unit, modifier) {
        this.unit = unit;
        this.modifier = modifier;
    }
    NodeItem.prototype.getChildNodes = function (unitArray) {
        var ingredients = this.unit.ingredients;
        if (!ingredients) {
            return false;
        }
        var childNodes = [];
        var unitNames = unitArray.map(function (x) { return x.name; });
        for (var ingredient in ingredients) {
            var index = unitNames.indexOf(ingredient);
            childNodes.push(new NodeItem(unitArray[index], ingredients[ingredient] * this.modifier));
        }
        return childNodes;
    };
    NodeItem.prototype.getDescendents = function (unitArray, magic) {
        var children = this.getChildNodes(unitArray);
        var newChildren = [];
        if (magic && !(this.getChildNodes(unitArray)[0].unit instanceof Recipe)) {
            return [this];
        }
        if (children) {
            for (var i = 0; i < children.length; i++) {
                var grandchildren = children[i].getDescendents(unitArray, magic);
                if (grandchildren.length) {
                    newChildren = newChildren.concat(grandchildren);
                }
            }
            return newChildren;
        }
        else {
            return [this];
        }
    };
    return NodeItem;
}());
//create element is a function that creates a new element with the innertext listed, appends it to toAppend, and returns the new element
var createElement = function (elem, innerText, toAppend, cssClass, id) {
    var newElem = document.createElement(elem);
    if (cssClass) {
        newElem.className = cssClass;
    }
    if (id) {
        newElem.id = id;
    }
    var newText = document.createTextNode(innerText);
    newElem.appendChild(newText);
    toAppend.appendChild(newElem);
    return newElem;
};
var getPrettyStr = function (prop) {
    return prop.replace(/_/g, ' ');
};
var combineObjs = function (objArr) {
    var newObj = {};
    for (var i = 0; i < objArr.length; i++) {
        //get the name of the unit
        var name_1 = objArr[i].unit.name;
        if (newObj[name_1]) {
            newObj[name_1] += objArr[i].modifier;
        }
        else {
            newObj[name_1] = objArr[i].modifier;
        }
    }
    return newObj;
};
//create an array of units/recipes based on what is in the unitData
var readData = function (unitData) {
    var units;
    units = [];
    for (var i = 0; i < unitData.length; i++) {
        var current = unitData[i];
        if (!current.type) {
            current.type = 'basic';
        }
        //check if this object has an 'ingredients' property
        if (current.ingredients) {
            units.push(new Recipe(current.name, current.race, current.ingredients, current.tier));
        }
        else {
            units.push(new Unit(current.name, current.race));
        }
    }
    return units;
};
var printObjToTable = function (obj, toAppend) {
    var table = createElement('table', '', toAppend);
    for (var prop in obj) {
        var row = createElement('tr', '', table);
        var col2 = createElement('td', '' + Math.round(obj[prop] * 100) / 100, row);
        var col1 = createElement('td', getPrettyStr(prop), row);
    }
};
var clickCallback = function () {
    var recipeType = document.getElementById('recipeType').value;
    var children = this.nextSibling.children;
    var targetElem = children[0];
    if (recipeType === 'Immediate') {
        targetElem = targetElem.nextSibling;
    }
    else if (recipeType === 'Magic') {
        targetElem = targetElem.nextSibling.nextSibling;
    }
    if (targetElem.style.display === 'block') {
        targetElem.style.display = '';
    }
    else {
        for (var i = 0; i < children.length; i++) {
            children[i].style.display = '';
        }
        targetElem.style.display = 'block';
    }
};
var sortData = function (oldArr) {
    var recipeArr = oldArr.filter(function (x) { return (x instanceof Recipe); });
    var tierObj = {
        magic: [],
        rare: [],
        epic: [],
        unique: [],
        hell: [],
        hidden_: [],
        legendary: [],
        hidden: []
    };
    for (var i = 0; i < recipeArr.length; i++) {
        var tier = recipeArr[i].tier;
        tierObj[tier].push(recipeArr[i]);
    }
    var newArr = [];
    for (var prop in tierObj) {
        newArr = newArr.concat(tierObj[prop]);
    }
    return newArr;
};
var filterResults = function (elem) {
    //(document.getElementById('hiddenCheck') as HTMLInputElement).checked = true;
    //(document.getElementById('basicCheck') as HTMLInputElement).checked = true;
    var searchTerm = elem.value;
    if (!searchTerm) {
        searchTerm = '';
    }
    searchTerm = searchTerm.replace(/ /g, "_");
    var recipes = document.getElementsByClassName('recipe');
    for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].id.indexOf(searchTerm) === -1) {
            recipes[i].style.display = 'none';
        }
        else {
            recipes[i].style.display = '';
        }
    }
};
var toggleClass = function (elem, eClass) {
    var oldClasses = elem.className;
    var classArr = oldClasses.split(' ').filter(function (x) { return (x !== ''); });
    console.log(classArr);
    var index = classArr.indexOf(eClass);
    if (index > -1) {
        classArr.splice(index, 1);
    }
    else {
        classArr.push(eClass);
    }
    var newClasses = classArr.join(' ');
    elem.className = newClasses;
};
var removeClasses = function (elem, classArr) {
    var oldClasses = elem.className.split(' ').filter(function (x) { return (x !== ''); });
    for (var i = 0; i < classArr.length; i++) {
        var index = oldClasses.indexOf(classArr[i]);
        if (index > -1) {
            oldClasses.splice(index, 1);
        }
    }
    var newClasses = oldClasses.join(' ');
    elem.className = newClasses;
};
var toggleUnits = function (elem, unitType) {
    var main = document.getElementById('main');
    toggleClass(main, unitType);
};
var setRaceToggle = function (val) {
    var raceClasses = [
        'terran_bio',
        'protoss_bio',
        'zerg',
        'terran_mech',
        'protoss_mech',
        'hybrid'
    ];
    var classToSet = val.replace(/ /g, "_").toLowerCase();
    var main = document.getElementById('main');
    removeClasses(main, raceClasses);
    var divider = '';
    if (main.className) {
        divider = ' ';
    }
    if (classToSet === 'all') {
        return;
    }
    main.className += divider + classToSet;
};
var f_main = function (unitData) {
    var units = readData(unitData);
    var recipes = sortData(units);
    var main = document.getElementById('main');
    //for each unit in units, create a DOM object with its name as the title
    for (var i = 0; i < recipes.length; i++) {
        var name_2 = getPrettyStr(recipes[i].name);
        var unitElem = createElement('div', '', main, 'unit', recipes[i].name);
        createElement('h4', name_2, unitElem, 'unit-title');
        //let btn = createElement('button', 'Recipe', unitElem);
        unitElem.className = 'recipe ' + recipes[i].tier + ' ' + recipes[i].race;
        if (recipes[i].tier !== "hidden") {
            unitElem.className = unitElem.className + ' basic';
        }
        var showButton = createElement('button', 'Recipe', unitElem);
        showButton.addEventListener('click', clickCallback);
        //TODO: finish getting the recipe info
        var recipesContainer = createElement('div', '', unitElem, 'recipes-container');
        var basicContainer = createElement('div', '', recipesContainer, 'basic-units');
        var immediateContainer = createElement('div', '', recipesContainer, 'immediate-units');
        var magicContainer = createElement('div', '', recipesContainer, 'magic-units');
        var immediateRecipe = recipes[i].getRecipeUnits('immediate', units);
        var basicRecipe = recipes[i].getRecipeUnits('basic', units);
        var magicRecipe = recipes[i].getRecipeUnits('magic', units);
        printObjToTable(immediateRecipe, immediateContainer);
        printObjToTable(basicRecipe, basicContainer);
        printObjToTable(magicRecipe, magicContainer);
    }
};
window.onload = function () {
    f_main(unitData);
};
