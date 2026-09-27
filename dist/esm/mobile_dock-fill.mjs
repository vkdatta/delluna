export const name="mobile_dock-fill";
export const id="dl_85f462ff772f3644c490";
export const url=new URL("../icons/mobile_dock-fill.svg?v=0c5814e92898a94a250956be915e76fa254fa06bfd22a86ae0787a042a95592d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
