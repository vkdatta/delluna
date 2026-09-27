export const name="sports_bar-fill";
export const id="dl_1e5c27db1786a12acff4";
export const url=new URL("../icons/sports_bar-fill.svg?v=501d4007f864f04f7a93e4c1dfe57057cfde47a247ffc815d8b66a0082b8b8b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
