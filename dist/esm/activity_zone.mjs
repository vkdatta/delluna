export const name="activity_zone";
export const id="dl_341c0eebc86a9e6cc5bd";
export const url=new URL("../icons/activity_zone.svg?v=238d4228efe6e5a82486a4a59efcf98c73305c2097212398439cffd51e0f5d66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
