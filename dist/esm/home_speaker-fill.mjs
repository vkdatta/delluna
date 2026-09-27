export const name="home_speaker-fill";
export const id="dl_fd83a99875c3867c09ef";
export const url=new URL("../icons/home_speaker-fill.svg?v=375659e7a3b48b349d5bbdc5a4ec0f1f03908e64a7dc3d818d173e5b570c2097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
