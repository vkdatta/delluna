export const name="ballot-fill";
export const id="dl_a7c08b30717ad091cc05";
export const url=new URL("../icons/ballot-fill.svg?v=d0189a4b28810867c7e9cc2c3ba5d0ed06710e5494349b66abeefd46e3415976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
