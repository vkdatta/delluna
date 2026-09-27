export const name="currency-circle-dollar";
export const id="dl_fe5c010baf6e4a0c90ec";
export const url=new URL("../icons/currency-circle-dollar.svg?v=17d443a7b9bff87aa22f6529e74ab580a7d0fb575647cc62ddfb2d674c1bc3c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
