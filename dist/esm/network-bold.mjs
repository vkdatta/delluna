export const name="network-bold";
export const id="dl_73f9f3cad2d0490a8946";
export const url=new URL("../icons/network-bold.svg?v=79c866e276589dd320bc3e52317225bfa596fade7db9ab16664dca03e469c7f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
