export const name="cable-car-bold";
export const id="dl_94d938ae5f0a4b55a82b";
export const url=new URL("../icons/cable-car-bold.svg?v=5fd9e255dfbf3a3246b90f89e1b029c1457a2eb95d000070879fe1adcdd2239d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
