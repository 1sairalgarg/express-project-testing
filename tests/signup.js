const { openBrowser, goto, textBox, into, write, click, link, closeBrowser } = require('taiko');
(async () => {
    try {
        
	await openBrowser({headless :false});
        await goto("http://127.0.0.1:3000/");
        await write("sairal12@gmail.com",into(textBox({id:"email"})));
        await write("1234567",into(textBox({id:"password"})));
        await click("submit");
        
        await click(link("Sign Up",toRightOf("or")));
        await write("sairal2@gmail.com",into(textBox({id:"email"})));
        await write("1234567",into(textBox({id:"password"})));
        await write("1234567",into(textBox({id:"confirm_password"})));
        await click("submit");
        await write("sairal2@gmail.com",into(textBox({id:"email"})));
        await write("1234567",into(textBox({id:"password"})));
        await click("submit");
		await click(link("New pad"));
        await write("XenonStack",into(textBox({id:"name"})));
        await click("submit");
        await click(link("New note"));
        await write("first phase",into(textBox({id:"name"})));
        ;
        await write('hello i have cleared the first phase', into($('textarea',below('name'))));
        await dropDown({name:'pad_id'}).select('XenonStack');
        await click("submit");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
