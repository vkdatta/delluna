export const name="fitness_trackers-fill";
export const id="dl_90737f596d685a3e757a";
export const url=new URL("../icons/fitness_trackers-fill.svg?v=d45411653ec94ae31fdee7f981750a3715a11a039218240e800e81e06500810d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
