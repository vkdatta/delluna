export const name="escalator-fill";
export const id="dl_fcdc4b24102b72a1dbb1";
export const url=new URL("../icons/escalator-fill.svg?v=8fe5315b04a4d690a2e0349599c3d72ed3dc7d7752028a220c9711a4961b7983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
