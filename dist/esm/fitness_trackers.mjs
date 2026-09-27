export const name="fitness_trackers";
export const id="dl_19b982a480129b53deed";
export const url=new URL("../icons/fitness_trackers.svg?v=1d1b613165272e3b97d820c6157788137b7c803ea98704b537157273f53042e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
