export const name="draft-fill";
export const id="dl_fb957061409084252a85";
export const url=new URL("../icons/draft-fill.svg?v=32215601c5bd21923b36d913a16a3627a1136b1f38c4ae1062a8223406dc5b43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
