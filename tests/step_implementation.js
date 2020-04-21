const { openBrowser, goto, textBox, into, write, click, link, closeBrowser } = require('taiko');
(async () => {
    try {
       
    await openBrowser();
step("Goto notejam signin page", async () => {
    await goto('http://127.0.0.1:3000/');
});

step("enter username <sairalgarg@gmail.com>", async () => {
    await write("sairalgarg@gmail.com",into(textBox({id:"email"})));
});

step("enter password <1234567>", async () => {
    await write("1234567",into(textBox({id:"password"})));
});
step("click on sign in button", async () => {
    await click("submit");
});
     
        
step("click on signup button", async () => {
    await click(link("Sign Up",toRightOf("or")));
});

step("enter email <sairalgarg@gmail.com>", async () => {
    await write("sairalgarg@gmail.com",into(textBox({id:"email"})));
});

step("enter password <1234567>", async () => {
    await write("1234567",into(textBox({id:"password"}))); 
});

step("enter confirm password <1234567>", async () => {
    await write("1234567",into(textBox({id:"confirm_password"})));
});

step("click on signup button", async () => {
    await click("submit");
});

step("enter username <sairalgarg@gmail.com>", async () => {
    await write("sairalgarg@gmail.com",into(textBox({id:"email"})));
});

step("enter password <1234567>", async () => {
    await write("1234567",into(textBox({id:"password"})));
});
step("click on sign in button", async () => {
    await click("submit");
});

step(" click on new Pad", async () => {
    await click(link("New pad"));
});

step("write the name of the pad", async () => {
    await write("XenonStack",into(textBox({id:"name"}))); 
});

step("click on save", async () => {
    await click("submit");
});

step("click on new note", async () => {
    await click(link("New note"));
});

step("enter the name", async () => {
    await write("first phase",into(textBox({id:"name"})));
});
step("enter the text ", async () => {
    await write('hello i have cleared the first phase', into($('textarea',below('name'))));
});

step(" choose the pad in which you want to create note from list.", async () => {
    await dropDown({name:'pad_id'}).select('XenonStack');
});

step("click on save", async () => {
    await click("submit");
});
} catch (error) {
    console.error(error);
    } 
  finally {
    await closeBrowser();
    }
});
