export const name="panorama_horizontal";
export const id="dl_fc96c6c23765293c0e86";
export const url=new URL("../icons/panorama_horizontal.svg?v=25c8867b84737090839f73bd7e8d52c918c55dc2c88f132b0d3874f1df0f8c12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
