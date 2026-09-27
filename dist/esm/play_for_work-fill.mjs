export const name="play_for_work-fill";
export const id="dl_fe0d0175c10a23ea6b2d";
export const url=new URL("../icons/play_for_work-fill.svg?v=6357975aa7ad16edef1f9e48ad7eaf09fef9a09ee1424e58d09628fc0fa5332d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
