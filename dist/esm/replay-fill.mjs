export const name="replay-fill";
export const id="dl_5bad559ca99634a94a64";
export const url=new URL("../icons/replay-fill.svg?v=ab7cb9588957f67533526b1b60d6443942eee61ddd8597787b4a62daf0994761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
