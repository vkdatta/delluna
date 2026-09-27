export const name="bedroom_baby-fill";
export const id="dl_4b526ec5f6d0dd085241";
export const url=new URL("../icons/bedroom_baby-fill.svg?v=da02f82e684469375c6cc3962667abc08059d33568d1d2c3e260f6a96b77a09a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
