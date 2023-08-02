describe('login page test', () => {
  it('login with true info', () => {
    cy.visit('/')
    cy.get('#loginButton').click()
    cy.url().should('contain', 'login')
  })

  it('signup with true info', () => {
    cy.visit('/')
    cy.get('#signUpButton').click()
    cy.url().should('contain', 'signup')
  })

  it('if username and password are true', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') // for username
    cy.get('#password').type('User100display100') // for password
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
  })

  it('if username is not true password is true', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('test{enter}')
    cy.get('#password').type('User100display100')
    cy.get('#accessButton').click()
    cy.contains('No message available')
  })

  it('if username is true password is not true', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100')
    cy.get('#password').type('test{enter}')
    cy.get('#accessButton').click()
    cy.contains('No message available')
  })

  it('if username and password are not true', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('test{enter}')
    cy.get('#password').type('test{enter}')
    cy.get('#accessButton').click()
    cy.contains('No message available')
  })

  it('if username and password are empty', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('{enter}')
    cy.get('#password').type('{enter}')
    cy.get('#accessButton').should('be.disabled')
  })

  it('if the username field is filled and the password field is empty', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100')
    cy.get('#password').type('{enter}')
    cy.get('#accessButton').should('be.disabled')
  })

  it('if the username is empty and the password field is filled', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('{enter}')
    cy.get('#password').type('User100display100')
    cy.get('#accessButton').should('be.disabled')
  })

  it('check tr flag is work', () => {
    cy.visit('/#/login/')
    cy.get('#turkishflag').click()
  })

  it('check en flag is work', () => {
    cy.visit('/#/login/')
    cy.get('#englishflag').click()
  })
})

describe('signup page test', () => {
  it('if signup button works', () => {
    cy.visit('/')
    cy.get('#signUpButton').click()
    cy.url().should('contain', 'signup')
  })

  it('if all fields are empty', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('{enter}')
    cy.get('#displayname').type('{enter}')
    cy.get('input').eq(2).type('{enter}')
    cy.get('input').eq(3).type('{enter}')
    cy.get('#accessButton').click()
    cy.contains('Kullanıcı adı boş olamaz')
    cy.contains('boş değer olamaz')
  })

  it('if only username field is filled and length is less than 4', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('a{enter}')
    cy.get('#displayname').type('{enter}')
    cy.get('input').eq(2).type('{enter}')
    cy.get('input').eq(3).type('{enter}')
    cy.get('#accessButton').click()
    cy.contains("boyut '4' ile '255' arasında olmalı")
    cy.contains('boş değer olamaz')
  })

  it('if only username field is filled', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('{enter}')
    cy.get('input').eq(2).type('{enter}')
    cy.get('input').eq(3).type('{enter}')
    cy.get('#accessButton').click()
    cy.contains('boş değer olamaz')
  })

  it('if only display name field is filled and length is less than 4', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('{enter}')
    cy.get('#displayname').type('a{enter}')
    cy.get('input').eq(2).type('{enter}')
    cy.get('input').eq(3).type('{enter}')
    cy.get('#accessButton').click()
    cy.contains("Kullanıcı adı boş olamaz")
    cy.contains("boyut '4' ile '255' arasında olmalı")
    cy.contains('boş değer olamaz')
  })

  it('if only display name field is filled', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('{enter}')
    cy.get('input').eq(3).type('{enter}')
    cy.get('#accessButton').click()
    cy.contains("Kullanıcı adı boş olamaz")
    cy.contains('boş değer olamaz')
  })

  it('if only password field is filled', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('{enter}')
    cy.get('#displayname').type('{enter}')
    cy.get('input').eq(2).type('a{enter}')
    cy.get('input').eq(3).type('{enter}')
    cy.contains('Kullanıcı adı boş olamaz')
    cy.contains('boş değer olamaz')
    cy.contains('Password MisMatch')
    cy.get('#accessButton').should('be.disabled')
  })

  it('if only password repeat field is filled', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('{enter}')
    cy.get('#displayname').type('{enter}')
    cy.get('input').eq(2).type('{enter}')
    cy.get('input').eq(3).type('a{enter}')
    cy.contains('Kullanıcı adı boş olamaz')
    cy.contains('boş değer olamaz')
    cy.contains('Password MisMatch')
    cy.get('#accessButton').should('be.disabled')
  })

  it('if password has no capital letter', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('user999display999{enter}')
    cy.get('input').eq(3).type('user999display999{enter}')
    cy.get('#accessButton').click()
    cy.contains('Şifrenizde en az bir büyük harf, bir küçük harf ve bir sayı olmak zorundadır')
  })

  it('if password has no lower letter', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('USER999DISPLAY999{enter}')
    cy.get('input').eq(3).type('USER999DISPLAY999{enter}')
    cy.get('#accessButton').click()
    cy.contains('Şifrenizde en az bir büyük harf, bir küçük harf ve bir sayı olmak zorundadır')
  })

  it('if password has no number', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('Userdisplay{enter}')
    cy.get('input').eq(3).type('Userdisplay{enter}')
    cy.get('#accessButton').click()
    cy.contains('Şifrenizde en az bir büyük harf, bir küçük harf ve bir sayı olmak zorundadır')
  })

  it('if password length is less than 8', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('User1{enter}')
    cy.get('input').eq(3).type('User1{enter}')
    cy.get('#accessButton').click()
    cy.contains("boyut '8' ile '255' arasında olmalı")
  })

  it('if only username and display name fields are filled', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('{enter}')
    cy.get('input').eq(3).type('{enter}')
    cy.get('#accessButton').click()
    cy.contains('boş değer olamaz')
  })

  it('if only username and password fields are filled', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('{enter}')
    cy.get('input').eq(2).type('User999display999{enter}')
    cy.get('input').eq(3).type('{enter}')
    cy.contains('boş değer olamaz')
    cy.contains('Password MisMatch')
    cy.get('#accessButton').should('be.disabled')
  })

  it('if only username and password repeat fields are filled', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('{enter}')
    cy.get('input').eq(2).type('{enter}')
    cy.get('input').eq(3).type('User999display999{enter}')
    cy.contains('boş değer olamaz')
    cy.contains('Password MisMatch')
    cy.get('#accessButton').should('be.disabled')  
  })

  it('if only display name and password fields are filled', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('User999display999{enter}')
    cy.get('input').eq(3).type('{enter}')
    cy.contains('Kullanıcı adı boş olamaz')
    cy.contains('Password MisMatch')
    cy.get('#accessButton').should('be.disabled')  
  })

  it('if only display name and password repeat fields are filled', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('{enter}')
    cy.get('input').eq(3).type('User999display999{enter}')
    cy.contains("Kullanıcı adı boş olamaz")
    cy.contains('boş değer olamaz')
    cy.contains('Password MisMatch')
    cy.get('#accessButton').should('be.disabled')  
  })

  it('if only password and password repeat fields are filled', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('{enter}')
    cy.get('#displayname').type('{enter}')
    cy.get('input').eq(2).type('User999display999{enter}')
    cy.get('input').eq(3).type('User999display999{enter}')
    cy.get('#accessButton').click()
    cy.contains("Kullanıcı adı boş olamaz")
    cy.contains('boş değer olamaz')
  })

  it('check tr flag is work', () => {
    cy.visit('/#/signup/')
    cy.get('#turkishflag').click()
  })

  it('check en flag is work', () => {
    cy.visit('/#/signup/')
    cy.get('#englishflag').click()
  })

  it('if all fields are true filled and only username is empty', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('User999display999{enter}')
    cy.get('input').eq(3).type('User999display999{enter}')
    cy.get('#accessButton').click()
    cy.contains("Kullanıcı adı boş olamaz")
  })

  it('if all fields are true filled and only display name is empty', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('{enter}')
    cy.get('input').eq(2).type('User999display999{enter}')
    cy.get('input').eq(3).type('User999display999{enter}')
    cy.get('#accessButton').click()
    cy.contains('boş değer olamaz')
  })

  it('if all fields are true filled and only password is empty', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('{enter}')
    cy.get('input').eq(3).type('User999display999{enter}')
    cy.contains('boş değer olamaz')
    cy.contains('Password MisMatch')
    cy.get('#accessButton').should('be.disabled')  
  })

  it('if all fields are true filled and only password repeat is empty', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('User999display999{enter}')
    cy.get('input').eq(3).type('{enter}')
    cy.contains('Password MisMatch')
    cy.get('#accessButton').should('be.disabled')  
  })

  it('if all fields are true filled and only password and password repeat are different', () => {
    cy.visit('/#/signup/')
    cy.get('#username').type('user999{enter}')
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('User999display999{enter}')
    cy.get('input').eq(3).type('User999display99{enter}')
    cy.contains('Password MisMatch')
    cy.get('#accessButton').should('be.disabled')  
  })

  it('if all fields are true filled', () => {
    var timestamp = new Date().getTime();
    var username = 'test' + timestamp;
    cy.visit('/#/signup/')
    cy.get('#username').type(username)
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('User999display999{enter}')
    cy.get('input').eq(3).type('User999display999')
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
  })

})

describe('home page test', () => {
  it('If delete moment button on this page work correctly', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#deletebutton').click()
  })

  it('If the delete moment button on this page is working properly and the give up button on the screen that appears is working properly ', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#deletebutton').click()
    cy.get('#cancelbutton').click()

  })

  it('If the delete moment button on this page is working properly and the Delete Moment button on the screen that appears is working properly ', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100')
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#deletebutton').click()
    cy.get('#accessButton').click()
  })

  it('check tr flag is work', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100')
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#turkishflag').click()
  })

  it('check en flag is work', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100')
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#englishflag').click()
  })

  it('If the post is accepted typing ', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#textArea').type('Hello World!')
    cy.get('#accessButton').click()
  })

  it('If the post is canceled ', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#textArea').click()
    cy.get('#cancelButton').click()
  })

  it('If the post is wrong image ', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#textArea').click()
    cy.get('#file').attachFile("nature.jpg")
    cy.get('#accessButton').click()
    cy.contains("boyut '1' ile '1000' arasında olmalı")
  })
  it('If the post is wrong gif ', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#textArea').click()
    cy.get('#file').attachFile("correct-gif.gif")
    cy.get('#accessButton').click()
    cy.contains("boyut '1' ile '1000' arasında olmalı")
  })

  it('If the post is accepted image ', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#textArea').type('This is amazing!')
    cy.get('#file').attachFile("nature.jpg")
    cy.get('#accessButton', {timeout:1000000}).click()
    cy.get('#loadNewMoments', {timeout:100000}).click()
  })

  it('If the post is accepted gif ', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#textArea').type('Hi!')
    cy.get('#file').attachFile("correct-gif.gif",)
    cy.wait(5000);
    cy.get('#accessButton', {timeout:1000000}).click()
    cy.wait(5000);
    cy.get('#loadNewMoments', {timeout:1000000}).click()
  })

  it('If the next button on this page is working properly ', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#nextButton').click()
  })

  it('If the previous button on this page is working properly ', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#nextButton').click()
    cy.get('#previousButton').click()
  })

  it('When click on the username in the upper right corner,if the dropdown list works', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
  })

  it('When click on the username in the upper right corner,if the my profile button works', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
  })
  
  it('When click on the username in the upper right corner,if the logout button works', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#logoutButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
  })

  it('If the home page button in the header is working', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
    cy.get('#homepagebutton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
  })

  it('If it works correctly when click the login button in the header after logout', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#logoutButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#loginButton').click()
    cy.url().should('contain', 'login')
  })
  
  it('If it works correctly when click the signup button in the header after logout', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#logoutButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#signUpButton').click()
    cy.url().should('contain', 'signup')
  })
})

describe('user settings page', () => {
  it('if the edit button works', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
    cy.get('#editButton').click()
  })
///////////////////////////////////////////////////////////////////
  it('if the delete my account button works', () => {
    var timestamp = new Date().getTime();
    var username = 'test' + timestamp;
    cy.visit('/#/signup/')
    cy.get('#username').type(username)
    cy.get('#displayname').type('display999{enter}')
    cy.get('input').eq(2).type('User999display999{enter}')
    cy.get('input').eq(3).type('User999display999{enter}')
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.get('#deleteMyAccount').click()
  })
///////////////////////////////////////////////////////////////////
  it('if the cancel button works', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
    cy.get('#editButton').click()
    cy.get('#cancelButton').click()
  })

  it('if display name correctly changing', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
    cy.get('#editButton').click()
    cy.get('input').eq(0).clear().type('display100{enter}')
    cy.get('#accessButton').click()
  })

  it('if display name not correctly changing', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
    cy.get('#editButton').click()
    cy.get('input').eq(0).clear().type('dis{enter}')
    cy.get('#accessButton').click()
    cy.contains("boyut '4' ile '255' arasında olmalı")
  })

  it('if we leave the image update field blank', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
    cy.get('#editButton').click()
    cy.get('#accessButton').click()
  })

  it('If delete moment button on this page work correctly', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
    cy.get('#deletebutton').click()
  })

  it('If the delete moment button on this page is working properly and the give up button on the screen that appears is working properly ', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
    cy.get('#deletebutton').click()
    cy.get('.modal-content').eq(1).find('#cancelbutton').click()
  })

   it('If the delete moment button on this page is working properly and the Delete Moment button on the screen that appears is working properly ', () => {
     cy.visit('/#/login/')
     cy.get('#username').type('user100') 
     cy.get('#password').type('User100display100') 
     cy.get('#accessButton').click()
     cy.url().should('eq', 'http://localhost:3000/#/')
     cy.get('#userDropdown').click()
     cy.get('#myProfileButton').click()
     cy.url().should('eq', 'http://localhost:3000/#/user/user100')
     cy.get('#deletebutton').click()
     cy.get('.modal-content').eq(1).find('#accessButton').click()
   })

  it('check tr flag is work', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
    cy.get('#turkishflag').click()
  })

  it('check en flag is work', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
    cy.get('#englishflag').click()
  })

  it('if image correctly changing', () => {
    cy.visit('/#/login/')
    cy.get('#username').type('user100') 
    cy.get('#password').type('User100display100') 
    cy.get('#accessButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/')
    cy.get('#userDropdown').click()
    cy.get('#myProfileButton').click()
    cy.url().should('eq', 'http://localhost:3000/#/user/user100')
    cy.get('#editButton').click()
    cy.get('#file').attachFile("test-profile.jpg", {timeout:1000000})
    cy.wait(5000);
    cy.get('#accessButton', {timeout:1000000}).click()
    cy.reload()
  })

})
