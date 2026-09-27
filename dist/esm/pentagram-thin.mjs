export const name="pentagram-thin";
export const id="dl_05f2926bfb644c6da49a";
export const url=new URL("../icons/pentagram-thin.svg?v=d931b08167310957c33796e84970917281f525fadf3506283377910d8f2415f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
