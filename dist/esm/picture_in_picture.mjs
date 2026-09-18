export const name="picture_in_picture";
export const id="dl_0e26fc9cff2848adb7ea";
export const url=new URL("../icons/P/picture_in_picture.svg?v=838db8ccec067b6f1dffd5928c6cc7c573c8826f952397f5d3ed89960892083b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
