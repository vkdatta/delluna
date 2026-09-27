export const name="animation-fill";
export const id="dl_3418a77271b525062a9e";
export const url=new URL("../icons/animation-fill.svg?v=a48017160bd753ee701451d697137e111efdc50883c961b8c7f40c52e3f26294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
