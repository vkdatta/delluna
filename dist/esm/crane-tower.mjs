export const name="crane-tower";
export const id="dl_d3b83c4923434910a4ec";
export const url=new URL("../icons/crane-tower.svg?v=5984a92ca95fbb6590199f85010d7901c8ae30bdf0b902417812b48eef71b995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
