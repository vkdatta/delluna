export const name="mobile_sound_off";
export const id="dl_65b7d3cf3f2d473c85e7";
export const url=new URL("../icons/mobile_sound_off.svg?v=f1b6705771039bb84debe54ae08abd248d2a363dca86a919e86c841b36d4f39b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
