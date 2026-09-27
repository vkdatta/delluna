export const name="moon-stars-fill";
export const id="dl_fae15bbdbf3b49128d47";
export const url=new URL("../icons/moon-stars-fill.svg?v=d7896806ab7749df4d9df1181efcb1a04ff2f8e2d9bdfe24ed2c972a1c38c576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
