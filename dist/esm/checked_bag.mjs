export const name="checked_bag";
export const id="dl_b8914b5c580864fc6fe5";
export const url=new URL("../icons/checked_bag.svg?v=7e0af381d3195235acca7c1f388ece1e14befb9c52722a526bac969869a4e0f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
