export const name="fitness_tracker-fill";
export const id="dl_958be45cabb2486d18f6";
export const url=new URL("../icons/fitness_tracker-fill.svg?v=30d482e8c09dc238c8993a0f9a95bd529dcaab46bf9782fcda782fb0fe61984f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
