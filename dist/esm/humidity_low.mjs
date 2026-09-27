export const name="humidity_low";
export const id="dl_dcb3b6d4ddfe660057f7";
export const url=new URL("../icons/humidity_low.svg?v=9f5fd5b169b349d49eb883dc70f1640f071d19f2249afc2af5921c87fbf0ae1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
