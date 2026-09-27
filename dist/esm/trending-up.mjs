export const name="trending-up";
export const id="dl_5b95424ac8344d6b865d";
export const url=new URL("../icons/trending-up.svg?v=5c8778a948a243d7998da8d87b898651788eacc9df1490df4790cb21b29d5224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
