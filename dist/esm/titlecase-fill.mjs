export const name="titlecase-fill";
export const id="dl_15089ead16ee444f8679";
export const url=new URL("../icons/titlecase-fill.svg?v=6c7f62aac9900a0f5d0b8bf64702087fb0e363f027905e2509c6a6480fa1df3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
