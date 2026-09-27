export const name="switch_video";
export const id="dl_aac6c72a783a0526050d";
export const url=new URL("../icons/switch_video.svg?v=d26738692f67ce16f9533737f7cab4170082c2e7eaa8c2abe8e7d6f7ec41947e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
