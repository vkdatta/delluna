export const name="playlist_add_circle-fill";
export const id="dl_b422912d2f4139671b1e";
export const url=new URL("../icons/playlist_add_circle-fill.svg?v=dec196721db54bcd2569d0f64ac72f29e8cbe7ec038de9ee612b578d4acdafa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
