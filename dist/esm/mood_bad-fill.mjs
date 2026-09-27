export const name="mood_bad-fill";
export const id="dl_7c1828666150e1ccdd8d";
export const url=new URL("../icons/mood_bad-fill.svg?v=a8ce935cce54352402b824178b7df26d0d2d558e743d2a3fd88434063b35753f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
