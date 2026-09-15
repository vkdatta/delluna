export const name="beer_meal-fill";
export const id="dl_df533cead2ba435e9a07";
export const url=new URL("../icons/B/beer_meal-fill.svg?v=2b4af88e650835910503986ce6c78b2845820f228f21aa3d1cf75d3ef4ddbb30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
