export const name="skillet-fill";
export const id="dl_9e858ecf6e168d78b948";
export const url=new URL("../icons/skillet-fill.svg?v=86ef82deceba60dc8ed37ca8406caae64a30255630e1b207359150dc678e4a88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
