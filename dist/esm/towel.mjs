export const name="towel";
export const id="dl_c85c246e657044588025";
export const url=new URL("../icons/T/towel.svg?v=62dd2c7bd3975126fc8654550310b505949afc06d323f3fafb30867d1bb12a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
