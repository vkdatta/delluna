export const name="closed_caption";
export const id="dl_5454ea2bb107cb36e9cf";
export const url=new URL("../icons/closed_caption.svg?v=6939130ffd538dadd540fcf54e4d3c7cb21f9703f6126a9b6910f034255efd64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
