export const name="award_meal-fill";
export const id="dl_3efea80a911cd6c18bf9";
export const url=new URL("../icons/award_meal-fill.svg?v=bc2834b561efaa67685bafa5e2b8c5e7bced2d09c7d713aaf4911dffe029e426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
