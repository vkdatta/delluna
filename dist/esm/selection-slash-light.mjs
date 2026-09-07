export const name="selection-slash-light";
export const id="dl_d2135e66c11944ff8afb";
export const url=new URL("../icons/S/selection-slash-light.svg?v=5cbf47e8bea048de63edb01f7be0625993f1b826af770fe80009f07b6e3994f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
