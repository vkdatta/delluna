export const name="megaphone-simple-fill";
export const id="dl_fd9e0ac082464f79b241";
export const url=new URL("../icons/megaphone-simple-fill.svg?v=cead45ff02f94b5bd1aa2e59268b884482b43cc54f7b316d69e7030a2bd7196e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
