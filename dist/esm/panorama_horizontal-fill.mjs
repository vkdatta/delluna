export const name="panorama_horizontal-fill";
export const id="dl_61471ab7cc46b519316a";
export const url=new URL("../icons/panorama_horizontal-fill.svg?v=7d3eb848298cee81a919339169e04d03a0d55b588eb3b05ce6ced40f5eff4f7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
