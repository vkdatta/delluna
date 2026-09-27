export const name="parking_sign-fill";
export const id="dl_bcb40c1fcfd6a01890b9";
export const url=new URL("../icons/parking_sign-fill.svg?v=559f47c8e9e91a97135dfa250b3ee549163c4ca17f4c0c494a416ee3760e6f87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
