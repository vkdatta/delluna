export const name="swipe_left_2";
export const id="dl_c1a0293e93a7c36a43aa";
export const url=new URL("../icons/swipe_left_2.svg?v=cb3d8693faa5d554a9c159733e5a35705e18d3cdb6fe5499973a64b49d605adc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
