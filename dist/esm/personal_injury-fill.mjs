export const name="personal_injury-fill";
export const id="dl_029251fe57ca4a7aa3e2";
export const url=new URL("../icons/personal_injury-fill.svg?v=31966e2c82ce37e794a8cd8b45d3fb05b80895979f2cff213515a80fa2a6feab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
