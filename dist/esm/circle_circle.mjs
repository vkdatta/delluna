export const name="circle_circle";
export const id="dl_e502e89de8889390603b";
export const url=new URL("../icons/circle_circle.svg?v=bfe1521d402d814a2534c2c658fc87bf9644b35066489d785786cd4dcd6637c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
