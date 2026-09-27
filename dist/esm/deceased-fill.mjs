export const name="deceased-fill";
export const id="dl_911dcf2b2173fe4c9eb6";
export const url=new URL("../icons/deceased-fill.svg?v=706119644a8256096facb025809b35c6b2c285983fe905dec281786c2c6e6868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
