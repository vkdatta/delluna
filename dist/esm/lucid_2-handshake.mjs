export const name="lucid_2-handshake";
export const id="dl_aebb284a616a445ab8cc";
export const url=new URL("../icons/lucid_2-handshake.svg?v=ad3ffc50b40d92320ffb0e86ae94cd8dcd8e2c09d547d4974780bc2f50ad337d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
