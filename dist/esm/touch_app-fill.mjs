export const name="touch_app-fill";
export const id="dl_c0cb1d430868b2a81c4e";
export const url=new URL("../icons/touch_app-fill.svg?v=5dd8f8ae656e2f027c07af9dbcbf15d7da57c1da0124e5c048c7f0bcfdf06eaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
