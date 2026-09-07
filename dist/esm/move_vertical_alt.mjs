export const name="move_vertical_alt";
export const id="dl_b5558327d0484922aef0";
export const url=new URL("../icons/all_60_named_svgs/move_vertical_alt.svg?v=74698f1150d16459507c9091f37e35730616731c1aa4a238211c1b221ae647a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
