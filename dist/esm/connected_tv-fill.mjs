export const name="connected_tv-fill";
export const id="dl_2ce88cca7ab101704992";
export const url=new URL("../icons/connected_tv-fill.svg?v=df58df918b7850c34d5495cc71080ccc9819441c3a7d7a8aed244ca5085bff0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
