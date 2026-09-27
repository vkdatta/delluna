export const name="bell-fill";
export const id="dl_1134ccaca2704c51ba27";
export const url=new URL("../icons/bell-fill.svg?v=72baab05b41185a7a078493ada8e51bc12b8220e7b4de9ef3a29a65404f832d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
