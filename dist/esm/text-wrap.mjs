export const name="text-wrap";
export const id="dl_2e3ffbe8126742b68aa3";
export const url=new URL("../icons/text-wrap.svg?v=329c0f0bdaf7aa9e31b157df3f94d1291d2f497245f47591f33b0be80267e367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
