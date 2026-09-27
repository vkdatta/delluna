export const name="text-b-bold";
export const id="dl_637e30c5e2d837b3b6ac";
export const url=new URL("../icons/text-b-bold.svg?v=a3b31e824d139a8202b64db8b891a508648c8d975df98c602ed97910f91d2d12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
