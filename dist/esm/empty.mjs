export const name="empty";
export const id="dl_826e56c3578549ad88fe";
export const url=new URL("../icons/empty.svg?v=097d20080c3e9c845f49ba89bb9550ce538936a0daf21df8289b3a437cecfaee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
