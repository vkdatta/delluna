export const name="lightbulb-filament-bold";
export const id="dl_ef0c8acc11ef451f91b9";
export const url=new URL("../icons/lightbulb-filament-bold.svg?v=45e027f0b9174776ed1890c90c9be35a445a20d8021cc035de5917c4a04ba7a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
