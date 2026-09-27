export const name="cell-signal-medium-duotone";
export const id="dl_a9e27bcde62845a3bc23";
export const url=new URL("../icons/cell-signal-medium-duotone.svg?v=feaae732fe56082b154d4c8d5c3855e7cec94623a6554526f16a58f089510898",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
