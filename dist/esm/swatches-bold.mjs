export const name="swatches-bold";
export const id="dl_584140a52174c32e1412";
export const url=new URL("../icons/swatches-bold.svg?v=192624fdea5f07ad5d7f14bf9b94c639640e6693ff2537fd1f8c67ff315d3493",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
