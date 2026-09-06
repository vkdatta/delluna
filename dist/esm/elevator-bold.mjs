export const name="elevator-bold";
export const id="dl_b5d0094497614179bc90";
export const url=new URL("../icons/elevator-bold.svg?v=a55bd893c1317f04e218dc9dde8caeff015325af8e0ad87055eebf058e256888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
