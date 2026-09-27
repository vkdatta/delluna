export const name="chess_king";
export const id="dl_b8029dce01dd2d5b3ee9";
export const url=new URL("../icons/chess_king.svg?v=ed2fe70e5c326f580358166e6cfb59f1a81fc542809939647508890c9d94b99f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
