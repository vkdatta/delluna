export const name="screenshot_keyboard";
export const id="dl_6f2c1051cd3fbc173287";
export const url=new URL("../icons/screenshot_keyboard.svg?v=9e27336663241ac8156e3282d661b29462044fd1df34fb9dce07e40f3a52499e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
