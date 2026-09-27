export const name="boxing-glove-fill";
export const id="dl_1142d1c6c3f54734a06b";
export const url=new URL("../icons/boxing-glove-fill.svg?v=5d80b2f80c3409cf3bb5924058b523a50100a0cd82a0583fcae43e01b7c70cc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
