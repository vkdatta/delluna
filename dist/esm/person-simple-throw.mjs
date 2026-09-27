export const name="person-simple-throw";
export const id="dl_eb7cdcbdb8654373a2c7";
export const url=new URL("../icons/person-simple-throw.svg?v=9c38d33ff42d55711abb95359e8de45a44612a700fd176ba990c69b163a8dfe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
