export const name="motion_photos_paused";
export const id="dl_4948237fdce327e617a1";
export const url=new URL("../icons/motion_photos_paused.svg?v=80a6e834f9cdd4320ed025abc80baea84b8fa1702dcccd11029851916779319b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
