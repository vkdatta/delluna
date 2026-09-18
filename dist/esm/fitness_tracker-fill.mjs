export const name="fitness_tracker-fill";
export const id="dl_2ddb255e890847adb49a";
export const url=new URL("../icons/fitness_tracker-fill.svg?v=c1b1e89df9c9991be498a783f9e2acd948ea9f3f8cdba26d4c984485c8db8eb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
