export const name="rug-fill";
export const id="dl_73f274ac614349698988";
export const url=new URL("../icons/rug-fill.svg?v=d9f402577b8a86a81fcf1490f81bbe66dba33db33dbfba5828271f59b218e797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
