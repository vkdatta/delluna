export const name="draw";
export const id="dl_bc6fece6150041d0bf30";
export const url=new URL("../icons/D/draw.svg?v=a42f5dbeed88a3480dc8bc2bb7123053d3a03a2d4740738b02e96cd478a7f185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
