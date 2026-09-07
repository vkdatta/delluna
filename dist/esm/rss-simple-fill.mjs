export const name="rss-simple-fill";
export const id="dl_c9120724140b47b9a9bb";
export const url=new URL("../icons/rss-simple-fill.svg?v=26eb157ebaea1df9c97cd7aa8e6bb8814d2d360a5d8549e0a2d2e5ee7ace618f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
