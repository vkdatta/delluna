export const name="reviews";
export const id="dl_1eb6dff197267ce3968d";
export const url=new URL("../icons/reviews.svg?v=2793d6beff6bdac2bd400b584ea184f0cf457d63be4eac219315021d5883daae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
