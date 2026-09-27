export const name="featured_video-fill";
export const id="dl_1c48914427132caf15bf";
export const url=new URL("../icons/featured_video-fill.svg?v=58d1d6f72c1bdfa286357b0672f3144e67466f7e9cb92a66be86cfccec0ae86b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
