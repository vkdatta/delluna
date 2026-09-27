export const name="text-h-six-fill";
export const id="dl_64d482439460af3ada28";
export const url=new URL("../icons/text-h-six-fill.svg?v=6897057df39b1b5cbebd33c7603cf83560536bc8603d5e944b537226f4306bf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
