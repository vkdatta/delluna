export const name="text-search";
export const id="dl_cee180a80e3b40b693b4";
export const url=new URL("../icons/text-search.svg?v=a8a02fb9c0cad7c624b8ad72c904a54cf013f7a7292e2e3d3751ba321439c839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
