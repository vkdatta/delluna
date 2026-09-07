export const name="virus-fill";
export const id="dl_369988e0d89a406099f7";
export const url=new URL("../icons/V/virus-fill.svg?v=2aefdbd73e83ebf233d059c46317197553dd1457e512b248ac6ecf53d783d692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
