export const name="cell-signal-low";
export const id="dl_f4837b200e22487cbc7c";
export const url=new URL("../icons/cell-signal-low.svg?v=3e545fd31dd80a810f8ae5acc3084fab64afd99bc1623cd7502fe8d21ff915ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
