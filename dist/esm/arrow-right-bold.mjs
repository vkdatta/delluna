export const name="arrow-right-bold";
export const id="dl_692a531f1569429a9d82";
export const url=new URL("../icons/arrow-right-bold.svg?v=27fa817ac02178968a4da7a9a9bc6492cebb9d8d2b959bbeafa7d70baa4e7d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
