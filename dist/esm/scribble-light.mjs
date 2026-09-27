export const name="scribble-light";
export const id="dl_2710fb5b88781c3a9690";
export const url=new URL("../icons/scribble-light.svg?v=804a16366dca51b7806d3a511c414f4728a2c91d9922a732b3c4992c61732276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
