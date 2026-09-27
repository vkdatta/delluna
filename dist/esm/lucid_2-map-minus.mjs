export const name="lucid_2-map-minus";
export const id="dl_8a054ee03abc4924a469";
export const url=new URL("../icons/lucid_2-map-minus.svg?v=6e39d9d086e05d1bb033eba406b0fc2f0ba5f39718014c59d8e3cfb1623d74df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
