export const name="cactus-bold";
export const id="dl_dc095dbb290c450dbc5b";
export const url=new URL("../icons/cactus-bold.svg?v=eed0769eedbcbeea7cb4ea427dc2da56d1cda9a391b86aa1c026ce126af19bf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
