export const name="film-slate-duotone";
export const id="dl_211fadb12dd34145b442";
export const url=new URL("../icons/film-slate-duotone.svg?v=1a3afaa7aac9b927a3c3865fa8a85efaecec47f698470aa15d1784f39a101b8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
