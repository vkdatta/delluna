export const name="tab_move-fill";
export const id="dl_82523962f179ddc3e30f";
export const url=new URL("../icons/tab_move-fill.svg?v=4ecbf2f875ee74c412630c242c013cb02431a9c2d3f0626e5a9802e5d1cdddb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
