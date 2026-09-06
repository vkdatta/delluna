export const name="brain-fill";
export const id="dl_0cd4fc51292b4d6d969e";
export const url=new URL("../icons/brain-fill.svg?v=084f1324acaa199634182fec64d2594e2725fd52128251de15664ba27dd9da38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
