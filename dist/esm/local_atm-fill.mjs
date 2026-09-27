export const name="local_atm-fill";
export const id="dl_dc09dd7a95a2d08802aa";
export const url=new URL("../icons/local_atm-fill.svg?v=afcab3730445b2a019c6cb55e4b34081915dd28be6a9fc821a461a73f19c78d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
