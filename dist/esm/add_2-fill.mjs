export const name="add_2-fill";
export const id="dl_523d6052be10ae701755";
export const url=new URL("../icons/add_2-fill.svg?v=0ea96e0f5707bd2ab6bb43134317491e4b6fc22e1c5874941399777fa8b1a3db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
