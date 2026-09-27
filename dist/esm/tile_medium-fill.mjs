export const name="tile_medium-fill";
export const id="dl_2ae62d1b1c80a09d32db";
export const url=new URL("../icons/tile_medium-fill.svg?v=9e2f29d9af8a89da3c3f5e9939bdadf9e6836592c39111c82f35ac694c5cfd8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
