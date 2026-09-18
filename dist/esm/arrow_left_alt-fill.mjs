export const name="arrow_left_alt-fill";
export const id="dl_f9602ce204324867807f";
export const url=new URL("../icons/arrow_left_alt-fill.svg?v=a80cc81bac9c1567f308e5a0ae9539bd8fdc5fd5b71c9d86b9d2d8920909e2f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
