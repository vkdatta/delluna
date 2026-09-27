export const name="blur_circular-fill";
export const id="dl_6b571196c2272f9ad2e1";
export const url=new URL("../icons/blur_circular-fill.svg?v=d3a45099b344a22a9b72c3f7ad30f0e0b261f8b8459e1390ce05154e04f67040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
