export const name="money-bold";
export const id="dl_443fdf7d6b61407c9324";
export const url=new URL("../icons/money-bold.svg?v=27f66f11933c6f2f9f795edfa27fad3b4d76003553a39804aa28340a0ceb213e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
