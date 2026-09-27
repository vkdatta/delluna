export const name="lucid_2-loader-circle";
export const id="dl_972179fdbc7e4d5d923b";
export const url=new URL("../icons/lucid_2-loader-circle.svg?v=0a2045b10bc2fe7622e4574d0e6ea939251ceacc7b1ba5d58457d3d8001196ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
