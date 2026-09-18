export const name="mode_night";
export const id="dl_cc4854ce23f74825b494";
export const url=new URL("../icons/mode_night.svg?v=9b9240d91ed43f48c41f126f407b4d58fb1ec37a32904721d24a7205deb49622",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
