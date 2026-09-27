export const name="open-ai-logo";
export const id="dl_142602b7adec40e390c7";
export const url=new URL("../icons/open-ai-logo.svg?v=189a18db0b8a3bd3260748bf1afc7611934611d265e5a06d9de56d3f2440a4f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
