'use strict';

var babel  = require("babel-core");
var plugin = require("./lib/index");

//
//var code = `
//    var foo = require("test");
//
//    var someObj = {
//        render() {
//            return (
//                <div>Hey world!</div>
//            );
//        }
//    }
//`;
//
//var output = babel.transform(code, {
//    plugins: [plugin, 'syntax-jsx'],
//    presets: ['es2015']
//}).code;
//
//console.log(output);



var code = `
function render() {
	return <div className="je" style="color: red"><button onClick={this.onClick}><Label text={text} /><svg class="foo"></svg></button><div></div></div>
}
`;

var output = babel.transform(code, {
    plugins: [plugin, 'syntax-jsx', 'transform-object-rest-spread'],
    presets: ['es2015']
}).code;

console.log(output);
//
//var code = `
//	Inferno.render(
//		<div><Foo val={ val1 } val2="123" /></div>,
//		container
//	);
//`;
//
//var output = babel.transform(code, {
//	plugins: [plugin, 'syntax-jsx'],
//	presets: ['es2015']
//}).code;
//
//console.log(output);
//
//
//var code = `
//	Inferno.render(
//		<div>
//			<Foo val={ val1 } val2="123" />
//			<span>test</span>
//		</div>,
//		container
//	);
//`;
//
//var output = babel.transform(code, {
//	plugins: [plugin, 'syntax-jsx'],
//	presets: ['es2015']
//}).code;
//
//console.log(output);
//

//var code = `
//    Inferno.render(<div>Hello world - { values[0] } { values[1] }</div>, container);
//`;
//
//var output = babel.transform(code, {
//    plugins: [plugin, 'syntax-jsx'],
//    presets: ['es2015']
//}).code;
//
//console.log(output);

//var code = `
//    var foo = require("test");
//
//    var someObj = {
//        render() {
//            return (
//                <select multiple={ true } value='foo'>
//					<option value='foo'>I'm a li-tag</option>
//					<option value='bar'>I'm a li-tag</option>
//				</select>
//            );
//        }
//    }
//`;
//
//var output = babel.transform(code, {
//    plugins: [plugin, 'syntax-jsx'],
//    presets: ['es2015']
//}).code;

//console.log(output);



//
//var code = `
//    var foo = require("test");
//
//    var someObj = {
//        render() {
//            return (
//                <ul><li>Im a li-tag</li><li>Im a li-tag</li><li>Im a li-tag</li></ul>
//            );
//        }
//    }
//`;
//
//var output = babel.transform(code, {
//    plugins: [plugin, 'syntax-jsx'],
//    presets: ['es2015']
//}).code;
//
//console.log(output);
//
//
//var code = `
//    var foo = require("test");
//
//    var someObj = {
//        render() {
//            return (
//                <div><div><span>{ test || foo }</span></div><h1>Hello world!</h1></div>
//            );
//        }
//    }
//`;
//
//var output = babel.transform(code, {
//    plugins: [plugin, 'syntax-jsx'],
//    presets: ['es2015']
//}).code;
//
//console.log(output);
//
//var code = `
//    Inferno.render(<div><span>{ test || foo }</span>{ bar } { foo }</div>, foo);
//`;
//
//var output = babel.transform(code, {
//    plugins: [plugin, 'syntax-jsx'],
//    presets: ['es2015']
//}).code;
//
//console.log(output);
//
//var code = `
//    var foo = require("test");
//
//    var someObj = {
//        render() {
//            return (
//                <div test1={ foo1 }
//                    test2={ "test" }
//                    test3={ foo.bind(this) }
//                    test4={ () => "lol" }
//                    test5="123"
//                    test6={ too\`bar\` }
//                ><Foo
//                    test1={ a ? 1 : 2 }
//                    test2={ [1,2,3] }
//                    test3={ {"bar": foo2} }
//                    test4={ \`test\` }
//                    test5={ 1 + 1 }
//                    test6={ \`foo$\{ fooBar \}\` }></Foo
//                ></div>
//            );
//        }
//    }
//`;
//
//var output = babel.transform(code, {
//    plugins: [plugin, 'syntax-jsx'],
//    presets: ['es2015']
//}).code;
//
//console.log(output);
