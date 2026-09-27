export const name="panorama-fill";
export const id="dl_8f4984984f4941eab545";
export const url=new URL("../icons/panorama-fill.svg?v=d48dcd5df286ac28f572a23b660baaa275fe46a0e29d7629d559b7b2b5abc7e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
