export const name="arrow-arc-right-bold";
export const id="dl_4287c4e8e0b04ca3b3d2";
export const url=new URL("../icons/arrow-arc-right-bold.svg?v=8065bf75d656878000f64a7cf0704cc85d19a07114844593535d23ea41468b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
