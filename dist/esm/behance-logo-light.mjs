export const name="behance-logo-light";
export const id="dl_6d3632e8a8924f1dbb30";
export const url=new URL("../icons/behance-logo-light.svg?v=8a5ec6a871a80fb6c0baec612b788dffdf546a684d5d59a9b411d46994f961e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
