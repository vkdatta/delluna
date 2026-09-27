export const name="bug-duotone";
export const id="dl_0768483c9c6040c2b99f";
export const url=new URL("../icons/bug-duotone.svg?v=86969a151301ac325dd7fb68594292eb3862ed781588c6944be3f18ebc609d61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
