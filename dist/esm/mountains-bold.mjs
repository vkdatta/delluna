export const name="mountains-bold";
export const id="dl_d2c9dee9621249528bab";
export const url=new URL("../icons/mountains-bold.svg?v=16e2c695c55bcb41da9de378dcf277cbc47ff16eb75b2233a6cb29a5e7f63199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
