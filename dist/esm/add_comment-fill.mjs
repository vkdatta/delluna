export const name="add_comment-fill";
export const id="dl_3346d5528c75db53e17d";
export const url=new URL("../icons/add_comment-fill.svg?v=d1e4f22a9fac7d305ff87c0dbb3c9b27b903afbfd2981f0431e1afa4f8cdfc03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
