export const name="fullscreen_portrait-fill";
export const id="dl_e2f2406c232b7e33fa18";
export const url=new URL("../icons/fullscreen_portrait-fill.svg?v=cfd4eb662b12ac6f6d7e06a50c22f9e47be33b2b80041cb43af46ac7d3e739be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
