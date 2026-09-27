export const name="align_horizontal_center";
export const id="dl_ae6db1acd24056e6f61a";
export const url=new URL("../icons/align_horizontal_center.svg?v=ee8f0305dd87c9666823b8bb1c518b396907351d68d28b72161a0b7a7ded5eff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
