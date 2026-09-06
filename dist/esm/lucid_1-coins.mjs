export const name="lucid_1-coins";
export const id="dl_f4e0a4768a1642a2a92e";
export const url=new URL("../icons/lucid_1-coins.svg?v=28b380662adbb31abb9096f695caaaac1706ee8b4aed942eb64ae5968d95f015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
