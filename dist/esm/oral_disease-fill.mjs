export const name="oral_disease-fill";
export const id="dl_40e424b789e04bacbe1f";
export const url=new URL("../icons/oral_disease-fill.svg?v=9a6ca32a770058fd76ab415360e1ad505ea0e6f0e0d8a46afbb9ab1130618e46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
