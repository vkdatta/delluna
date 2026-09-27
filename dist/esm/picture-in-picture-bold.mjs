export const name="picture-in-picture-bold";
export const id="dl_41004d524d2f4255a797";
export const url=new URL("../icons/picture-in-picture-bold.svg?v=2d52701afa819e1645cd2ef3be0db01e9d2dff5e78424a89672f62c2be0e01b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
