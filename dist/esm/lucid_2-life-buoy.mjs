export const name="lucid_2-life-buoy";
export const id="dl_0b106b6272184cfbbd72";
export const url=new URL("../icons/lucid_2-life-buoy.svg?v=37f52459c8ff55aabae250395fe5d82e9f7691230f6549a66f921a7dd3399090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
