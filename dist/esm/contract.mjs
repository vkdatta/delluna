export const name="contract";
export const id="dl_2af7e093e0c34c3b9b64";
export const url=new URL("../icons/contract.svg?v=9250e3573c7ccbec362dcbd81caa348294429af71f07f812051cd422a4593127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
