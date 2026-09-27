export const name="tram-light";
export const id="dl_c619571a836ff6aab712";
export const url=new URL("../icons/tram-light.svg?v=817c396d022a7070631599ae54e5edfbd0573571fbd4fbe1752e8d0dc42bef67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
