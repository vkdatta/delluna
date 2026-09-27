export const name="spatial_tracking-fill";
export const id="dl_811307de30f7b0410392";
export const url=new URL("../icons/spatial_tracking-fill.svg?v=30bf5d772901a87ba751a86750f9840f6d5ae6eef62b050b969d522c3a341430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
