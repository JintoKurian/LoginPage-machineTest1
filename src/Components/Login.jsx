import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='loginContainer'>
            <div className="imageSection">
                <img src="https://s3-alpha-sig.figma.com/img/741a/304e/6aeb4d492404ee3b62a8dafddbe2b5d0?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AC9LSx4D5pKnHZWxO4fEJluSn22ewJ7q9QW9iM2xTUp3uP8sd-xIccWffe4vnIfIK6XYLxch6~PPKtzCzgQN2TlTvIBWmAgRMFl~W1hEfZIQieJmM3RWJ9CMP9j0AzeWhzIXTbVwiIjTspCHGmn1rOyABK0Dzy2O9jvt5xWaU-H~4pPfLqIBOktX~mkI2XhiF1f6AHzzimlvEoIz0g6cD1OtG~rHD0yjrkH-Sb31yvb3NV3WBhCzNLG09bHGNYIvMghyxFK-fytqH3P2ox8lP0RgS60ZtB~KQCMNfyEaf6G~v85QqxvsiWLcWkZfN07KkQM5FxdD0kJZBzBor0j4cQ__" alt="Background" />
            </div>

            <div className='loginMain'>
                <div className="heading">
                    <img src="https://s3-alpha-sig.figma.com/img/6d75/a707/42b431df4d2e7424df1d501beabb799a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LI-6Y6vYX0T4NCz0dKMhGHFcu~8K0dwV-e0jDA9ncWnENTesZluL4YGj8nKXcyHZywlvkTqcFrRiJSpPt8uS0GbjCGj2aHAuIsUFcQ4vUHX9lIrD5ZE6NYn~v66R~vCJbrjRv32gTC88bJyu~nXEWNP7wUVk1fsHede-X4MG0VspIeeu1QifglEetflpVJCKFgEJXnM95QSTsEQhy-U4WvXiH36QrjqTckeUU53rma3MkFIvQYu-5IJLgjL-LdeHbaa6yQ55Y~Rs6A86wnqEe0W-RQIPSmDaxndrpktqq~By3Z6GQhnceahCY5UMV-p1LSMDCx8frxNP5poS58N-4w__" width="50px" alt="logo" />
                    <h2 className="logoText">LOGO</h2>
                </div>

                <h3 className="welcomeText">Nice to see you again</h3>

                <form className="loginForm">
                    <label htmlFor="email">Login</label>
                    <input type="text" id="email" placeholder="Email or phone number" />

                    <label htmlFor="password">Password</label>
                    <div className="passwordInput">
                        <input type="password" id="password" placeholder="Enter password" />  <label className='eyeIcon' htmlFor=""><i className="fa-solid fa-eye fa-lg"></i></label>
                    </div>

                    <div className="actions">
                        {/* <label>
                            <input type="checkbox" /> Remember me
                        </label> */}

                        <div class="container">
                            <input type="checkbox" id="check" />
                            <label for="check" class="button"></label> <p>Remember me</p>
                        </div>
                        <a href="#" className="forgotPassword">Forgot password?</a>
                    </div>

                    <button type="submit" className="loginButton">Sign in</button>

                    <hr className="divider" />

                    <button type="button" className="googleButton">
                        <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' alt="Google Icon" className="googleIcon" />
                        Or sign in with Google
                    </button>
                </form>

                <p className="signupText">Don't have an account? <a href="#">Sign up now</a></p>

                <div className="HeadingMiddle">
                    <img src="https://www.pngfind.com/pngs/m/513-5137995_brightvibes-bright-vibes-quotes-hd-png-download.png" width="50px" alt="logo" />
                    <h2 className="logoText">LOGO</h2>
                </div>

                


                <div className="userSection">
            <div className="userImages">
                <img src="https://s3-alpha-sig.figma.com/img/cbba/19ab/7c453e91f0f26c1d76ccd7c38f8865cf?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h95cmily3D7fmb3X0Pp3yQlXYmkUw5PqflOeZIStomG0GimHBdnyYdbLdHujaWf9MYOKfoqfuVVlBxLDER7CXOOMTyKv0Lx11msqkg~lMlqdmFsPjfDsZ88jxot6GTaALtjP5N5Bd9ofnc-U0t-YXHkCxpcu831pmDvuoUqcI78XfUoH0bhvLM0G1XiLA8wr3Fl~8mLJultBDZ1lVlXC-Z4IsPmJGgzgsT9F~gKGvl8wuIrKlOuuc2sPz8E6nCDbk6fozBdxUt5afcCwvElqsdyXs1AbR3kbK3wPK5ptsvkvFSyJWTuzMRpS1pXFm-pizeHMHIHt7~8YasFowzirDQ__" alt="User 1" className="userImage" />
                <img src="https://s3-alpha-sig.figma.com/img/ba88/eb7b/4357ccf260ffcb69e9a74820541e8969?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCyJla12fqPzuFdcaY16RGj0KSzikPV~zFRfscjijCqEps-q-ROIcgYN0A30uTK00c7J7tTGwq2rVX4dlgf1KidH6RtizjGjijplehmLsOh40a4mye41eNU5BEhoxBLPBsIjcA23NASFPlGTYikOou8cX9TVg7cRz-5S6Cz26Xp3EhwcF40PG2~7pyvgUOMnNLz3NJopBb3cLWajN4H7hLe1dJQaSwg6vJSyvE7bQuNMtlUJl0WJDNyON1PqEe5cpKenk8~7LF5s1t5lbBtvHhEvOaNnUO4X2hcUMAuHGVX06uSb0hTzADeDgZLzN0tMo58~CGxVZCUFXOqSz1En6A__" alt="User 2" className="userImage" />
                <img src="https://s3-alpha-sig.figma.com/img/05e8/e319/6a3565c67e1ffec70fc0377f3667177d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iQX0YZ7pwe3ztWYEb5eytOJaGOXapP5bKMHJ0DWDPaftx2fRgk3frCeL2htt0JYLLVYSdG9TSJ2BLJ3MjfHb2FrQGPuZ4D-OycJRC3LgYcneKYAFaD2oZXDeeqZh2SpAuh5JndbOGIF~-uxv1DFUePQ3waX78Z6MA9ImRP3rla5tmw60dF5ItwcdKp9ULrSQUT21hKclXHabDbPf-e~WhpLPkioG8g6Ajj8Sed~zdgGufjXlrA2gUEl1Brg7lqVJawtLP1nIjh9Vqk81pzdB3CXh99RTKXjl16tXDsQofrILBpnxpoESdfdQ1~waD74AYW33L3eC~yNzzEOBM~IbYQ__" alt="User 3" className="userImage" />
                <img src="https://s3-alpha-sig.figma.com/img/1d05/d59e/2312732dd6546e4a1b3357770704b778?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X4PnDOifNCz4nPrekxfSSt-TTgXrqj~GncKLvQdenYk02IxMtwfaOWNOQWUIwBCgbcbVtmGo~sKvQaO3v~OzeMCr59uCa~ShtRlgfkAkxNPTeBQEskpKU9Tmsjh0xRVMmMUMUDtFw7XnhT48aGS1oFQusdZXhKAtQzqqj~2kXY-KNeJg5ncZULXR1MEKWt0NYTMTZv9qSDoFSMmwsEEO8PumoAJksySKfXzxnHkQaNX70L5f8AXu5-am~XsM2MAzFwIm4fiebkG7WEqhAWL9MTomwPCzRy~YWRYgB10TvrrM3vBsoOS3Ej5k2COOA9STAGVvXM-3sKw9vHjB0ziIfw__" alt="User 4" className="userImage" />
                <img src="https://s3-alpha-sig.figma.com/img/ed9f/cc05/40746feeb359ce6f66316522d727dc34?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iMenWwLQQXZ9y2dzMDozGyfQYs8~zBf53f5mTClS~v1EtAxXzjUelTSgO1VF47mtJaFGK4uqoI7ep8vyd8GPTXRotwv7gLKnmSfkB~19w0-iWzKSnvMj-vVEtBWBU55V-AtLHb38~robo~0o7Dk-Fd0IWKjudBVdtieWCRLXq-LBIm8FuiksaU-u3KrZTaHVoqJGNYoEYWe8eDl6NVw5fDMWD9QzvIPr7PRqjJd-bHdJuhKAfeXh~m-mvAUq9DwXuuiYs2tDCQPw0TLVkMFAn-cN1G-TT-ZwwM51FYCygwMFVcM1BVeaVXjEsgM-ekrqjIXDQQ5npSkn-uNT-c-MCw__" alt="User 5" className="userImage" />
                <p className='userText'>1000+ users</p>
            </div>

            <p className='copyrightText'>© Perfect Login 2021</p>
        </div>

            </div>
        </div>
    );
}

export default Login;
