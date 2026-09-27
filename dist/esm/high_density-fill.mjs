export const name="high_density-fill";
export const id="dl_3d18e83f22edd64b6dc9";
export const url=new URL("../icons/high_density-fill.svg?v=e0d4d31172dddda4b002e0bac310e95018760fbee4563ce393bc5951488e71b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
