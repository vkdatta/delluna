export const name="nut-light";
export const id="dl_0ee4a7ee787e44edaf56";
export const url=new URL("../icons/nut-light.svg?v=c8f9cb571d25c5942f3fddf88a8f20e5ed02552f4eadf51514b9b05a5357106c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
