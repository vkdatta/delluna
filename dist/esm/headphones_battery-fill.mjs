export const name="headphones_battery-fill";
export const id="dl_97389da675153d203ef7";
export const url=new URL("../icons/headphones_battery-fill.svg?v=0596410f7bb08fda9a9b9d83f22e95faa095ac213a21799b1ec417e369ac4baf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
