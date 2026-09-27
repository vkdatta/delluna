export const name="seatbelt-light";
export const id="dl_ec88174a74efcefd7d38";
export const url=new URL("../icons/seatbelt-light.svg?v=fb27f85d2ae9e3c3555fa3980db2ed2949f7453650e4450b824101de5174efe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
