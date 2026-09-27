export const name="arrow-bend-down-left-bold";
export const id="dl_a0d9e4ee5b204e7eaeda";
export const url=new URL("../icons/arrow-bend-down-left-bold.svg?v=86e5cfc128bd58e8b2ba3dc32972d4c6e46ee9f98de46027e5e63c65772295c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
