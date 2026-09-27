export const name="position_top_right";
export const id="dl_bfabb7185e90bb5c424d";
export const url=new URL("../icons/position_top_right.svg?v=16d9984acaab412ec9e367826ba8ca25764dde426902882e485a08edc6f83396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
