export const name="bowl-food-fill";
export const id="dl_32d034d71a474c548016";
export const url=new URL("../icons/bowl-food-fill.svg?v=3bc0394da565b269639d286ab80e4a2c73bcf68e236e7c9073df09bb3ee5deb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
