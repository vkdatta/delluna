export const name="gate";
export const id="dl_3cc52958945c4c025bfb";
export const url=new URL("../icons/gate.svg?v=1473dd13b5ec82261d7ba6661371f99c78f91814ebdca45427e3df24c72cb093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
