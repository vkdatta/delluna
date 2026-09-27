export const name="monorail-fill";
export const id="dl_9b538409f1ff3bce68c3";
export const url=new URL("../icons/monorail-fill.svg?v=e06e46c98fed26c3e1dac64039a4063a8ebf953eb60ad0d2a33576e4aa9b1596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
