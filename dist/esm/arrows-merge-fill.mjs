export const name="arrows-merge-fill";
export const id="dl_4ebb23f9489a41cc806b";
export const url=new URL("../icons/arrows-merge-fill.svg?v=09ff64558a9e6f7428f36139b4db14a5a41a5bb6903b199ac27c3eba75c09638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
