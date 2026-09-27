export const name="bakery_dining";
export const id="dl_307e7daab553ab2649a6";
export const url=new URL("../icons/bakery_dining.svg?v=14be18b00aea42fb524810c8c8aa304186525f34024fb2a87fc94797eb7f6c88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
