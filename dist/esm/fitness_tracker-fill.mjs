export const name="fitness_tracker-fill";
export const id="dl_a1f2f81cf11c68c0b389";
export const url=new URL("../icons/fitness_tracker-fill.svg?v=173fd3094090eaf73e5dd54996817dba6423ad1378396be26335018afe8440d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
