export const name="gesture-fill";
export const id="dl_ebe6db3957c94ca593c0";
export const url=new URL("../icons/gesture-fill.svg?v=b6890f50c9f74abc6d7d4697dd388e33427cab29e31094a7591ce8c871aa2df7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
