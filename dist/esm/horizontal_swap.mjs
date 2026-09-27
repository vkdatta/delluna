export const name="horizontal_swap";
export const id="dl_98fed5edd9ad41279fcd";
export const url=new URL("../icons/horizontal_swap.svg?v=abe2cdce7d225c19220e3788d358b248b42322a7977b5190adc81d4d6784abfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
