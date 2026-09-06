export const name="number-zero-light";
export const id="dl_e8574c3bd62a41ec8eab";
export const url=new URL("../icons/number-zero-light.svg?v=4b72d2b348d5d35dd4d1acddbfe7ed088c55dd5b1aec3e62ac3fa2e5d209134e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
