export const name="mouse_lock";
export const id="dl_c86564a79b69c1fecc06";
export const url=new URL("../icons/mouse_lock.svg?v=e56c97df642ca607778b110eb3c520124204eee116dfbcd28aaf1e6da35ed891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
