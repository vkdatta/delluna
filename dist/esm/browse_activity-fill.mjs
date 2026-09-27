export const name="browse_activity-fill";
export const id="dl_2d3c56afe95104945828";
export const url=new URL("../icons/browse_activity-fill.svg?v=df38d2d2666a1742e466780deefa918b9c09a59bcf33f365a249b4862a392aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
