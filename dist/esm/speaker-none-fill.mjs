export const name="speaker-none-fill";
export const id="dl_e2f1de6b71b08b24884c";
export const url=new URL("../icons/speaker-none-fill.svg?v=d15f80e7ee45f60b6d15493c1d9c6aed4051177155cfea37853628321ece00d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
