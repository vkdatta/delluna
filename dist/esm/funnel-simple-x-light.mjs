export const name="funnel-simple-x-light";
export const id="dl_1261409c5370491ca70a";
export const url=new URL("../icons/funnel-simple-x-light.svg?v=b951e8ad92898e487a566ca84f0cfa36a2f82d6bb40d4bdc24a3794cdbf2104b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
