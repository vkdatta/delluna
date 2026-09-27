export const name="star_half-fill";
export const id="dl_958e69523d64c9472153";
export const url=new URL("../icons/star_half-fill.svg?v=1b676de38e681b0a7de79ddc5b9fe44a38af8cc218e10af70fe8d5088b2369ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
