export const name="file-lock";
export const id="dl_83573da77cfb4be08a57";
export const url=new URL("../icons/file-lock.svg?v=76caedc131d433c3cbad2d9b774246efe890cbf4f32295e09563b46446ad9fe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
