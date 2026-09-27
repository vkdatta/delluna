export const name="piggy-bank-light";
export const id="dl_5b01dc5670994da9995c";
export const url=new URL("../icons/piggy-bank-light.svg?v=ce58441ea0f9dd29d6287a3f69c0ae936a0471284bd6f09fa216a9279b3a72a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
