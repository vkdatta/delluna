export const name="play_lesson-fill";
export const id="dl_53e41b261a3a6939414d";
export const url=new URL("../icons/play_lesson-fill.svg?v=af7845ae70d3a84cc09e1f08c633f56e028dbc4fdb53bd4669fb17dbaae786b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
