export const name="motion_play";
export const id="dl_c7c20d27e4301875b702";
export const url=new URL("../icons/motion_play.svg?v=2b320abbe8d08c7b2cadf5a371d4a89ccfb16fed508039aa3b345ee8b95a2750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
