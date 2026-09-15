export const name="bottom_right_click-fill";
export const id="dl_7565dc4ce26e4263bde7";
export const url=new URL("../icons/B/bottom_right_click-fill.svg?v=5c5d135df7409a6f4c86e437d9274371c63fc01e17d869fef3c045a0e5870444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
