export const name="biohazard-bold";
export const id="dl_3bb60b1754604381ae5c";
export const url=new URL("../icons/biohazard-bold.svg?v=5c41eaddc9615a73eae82643d38b32a806f1e570dbc68b8e7d7ab2e495f3c213",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
