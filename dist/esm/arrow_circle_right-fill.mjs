export const name="arrow_circle_right-fill";
export const id="dl_b5a1aa68935f471eb4a7";
export const url=new URL("../icons/A/arrow_circle_right-fill.svg?v=7c447ce10ffae45d95c90882a63dfe94f427a80c5b59f42b927ea26cd2e35d05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
