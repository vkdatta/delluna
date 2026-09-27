export const name="music-notes-fill";
export const id="dl_54969aedc3e74035ae13";
export const url=new URL("../icons/music-notes-fill.svg?v=e55ecdde3e62c84578a148fef482c15ef80e80ee9b4dcc33e23e5c4966de4c43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
