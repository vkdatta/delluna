export const name="paint-bucket-light";
export const id="dl_7f6a8ca6ca1843e9b7c3";
export const url=new URL("../icons/paint-bucket-light.svg?v=964a688a6700057633c8f2f56fb61905a6e90dbb3bfec69f4da0a415fad85610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
