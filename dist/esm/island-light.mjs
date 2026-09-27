export const name="island-light";
export const id="dl_ba42cf08086e4f12b0f0";
export const url=new URL("../icons/island-light.svg?v=d284ca49b26941a6a879d03fae79568749ae1c186b234424797e98b17ded0a61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
