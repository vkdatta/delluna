export const name="utility-pole";
export const id="dl_2a6e44436806429f9518";
export const url=new URL("../icons/utility-pole.svg?v=23f1ea824cb0b85360a8519fff67240f9e64935df2e4b30958c3e9180f4a3f8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
