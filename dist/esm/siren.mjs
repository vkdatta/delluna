export const name="siren";
export const id="dl_47c18402510e4b5caa42";
export const url=new URL("../icons/S/siren.svg?v=2296e671635ab7fe8c3b0e13d5e2c41bb01f7b2bbaf9abfd68717725afbd6714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
