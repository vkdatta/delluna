export const name="help-fill";
export const id="dl_218cd89e5d79cf426b1e";
export const url=new URL("../icons/help-fill.svg?v=902264740817f01134eb37818beb55df84d7c6b055f84db146b243db3b204ad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
