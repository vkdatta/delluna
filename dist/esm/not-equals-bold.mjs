export const name="not-equals-bold";
export const id="dl_0800e47993ed457ebed2";
export const url=new URL("../icons/not-equals-bold.svg?v=44d891160d23b00501681fa250a43843435ac8f0f608512abea228ca69655127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
