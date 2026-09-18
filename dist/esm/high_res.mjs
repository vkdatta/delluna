export const name="high_res";
export const id="dl_b04ac6e088224a90a9e2";
export const url=new URL("../icons/H/high_res.svg?v=5c25980b43fb43c22d2ae0e93553ed2db6b374f9c7f5ed52287e8ee9d1acbeec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
