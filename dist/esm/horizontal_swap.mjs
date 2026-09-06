export const name="horizontal_swap";
export const id="dl_98fed5edd9ad41279fcd";
export const url=new URL("../icons/horizontal_swap.svg?v=af70a30d0d80cf75e52a09913476a6855dd556bd9220666b7132eee1229e0b4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
