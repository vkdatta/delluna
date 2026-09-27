export const name="caret-down";
export const id="dl_3cf239937972443f8fcf";
export const url=new URL("../icons/caret-down.svg?v=7456677c2491b7c04874bcbb551d0da66a50d21874c1ac20884bc16f26e84cd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
