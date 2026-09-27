export const name="where_to_vote-fill";
export const id="dl_7bfe4d38893e95b66c42";
export const url=new URL("../icons/where_to_vote-fill.svg?v=8234b6e623af165114b273ca024613c1ca0f1f385351dc5ef494aa9324f94bb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
