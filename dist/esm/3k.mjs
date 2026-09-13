export const name="3k";
export const id="dl_f89ae98aa343475f9244";
export const url=new URL("../icons/3/3k.svg?v=f8917991019337c466a2d6b4adbbf0e5b8fd429736f994354b7d0befbb663da8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
