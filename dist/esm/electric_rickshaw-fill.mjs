export const name="electric_rickshaw-fill";
export const id="dl_5b3e391cf42936e44a23";
export const url=new URL("../icons/electric_rickshaw-fill.svg?v=9c65da1463936c2a920bf87321a0af680d3778c2b513bd507c473cfc937b073b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
