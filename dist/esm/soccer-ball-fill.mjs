export const name="soccer-ball-fill";
export const id="dl_cde5b68bfc46b8d6bfce";
export const url=new URL("../icons/soccer-ball-fill.svg?v=f49a47067e7fa6ae33a2d4413e6654b6099b5ae9958d035e64de00606729a621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
