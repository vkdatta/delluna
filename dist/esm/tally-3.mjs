export const name="tally-3";
export const id="dl_0db9c3d735a5499797db";
export const url=new URL("../icons/tally-3.svg?v=2b13d2ed7696e33baf32816a31f311400308963bcd0313bca1ae67ddeac2d82b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
