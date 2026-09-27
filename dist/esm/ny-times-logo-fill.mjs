export const name="ny-times-logo-fill";
export const id="dl_d5212f533e214e069c9e";
export const url=new URL("../icons/ny-times-logo-fill.svg?v=1e1b83831dd72964d4c2e42e91055101e5e24430ec06412038fd3b21ac9aaff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
