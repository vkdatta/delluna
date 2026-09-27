export const name="radio-button-bold";
export const id="dl_def8bc92ca3c4491aa80";
export const url=new URL("../icons/radio-button-bold.svg?v=39036dd197e7c27b25db48e3fd029e5717155974d64c2268962ee88830f97518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
