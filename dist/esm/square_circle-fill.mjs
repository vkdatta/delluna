export const name="square_circle-fill";
export const id="dl_05635a7c5fd84d65b2dc";
export const url=new URL("../icons/square_circle-fill.svg?v=3be4671f62e1e5a1c2da1812bbae74214c26ebb07d7fb3c6a491fa33e41a6a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
