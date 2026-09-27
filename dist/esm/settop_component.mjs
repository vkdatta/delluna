export const name="settop_component";
export const id="dl_479859e61e13b5d1295c";
export const url=new URL("../icons/settop_component.svg?v=88a9f792db62332f7963bb8ac8348608a73c0dd9898f1acbc9a29fd87b1af9c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
