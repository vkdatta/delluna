export const name="flag";
export const id="dl_d642370cd27347bbb991";
export const url=new URL("../icons/flag.svg?v=6a2d2b272b97a8c6831e04bc6f79ad385bfbc50aa395efd1368dd58721e98f3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
