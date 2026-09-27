export const name="chess_queen";
export const id="dl_fa1610f9cdfb8a8fcdf2";
export const url=new URL("../icons/chess_queen.svg?v=0254f0245b99bce3714dfe80238aaf958e29847f5ce2819d712b37fadf44c752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
