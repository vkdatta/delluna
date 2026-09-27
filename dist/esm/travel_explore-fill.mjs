export const name="travel_explore-fill";
export const id="dl_2638b08d1098cdce6f16";
export const url=new URL("../icons/travel_explore-fill.svg?v=be0d1a4403c43e9872b4abb2721ed39c7046b3eb03224be33288a29e61b568e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
