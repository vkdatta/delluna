export const name="fitness_trackers-fill";
export const id="dl_bc371c4370f792d370e6";
export const url=new URL("../icons/fitness_trackers-fill.svg?v=2579ec319bb83b0bce124886ed4f0fdceae248e972d417066954ec4da0f3dbfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
