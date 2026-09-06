export const name="lucid_2-hourglass";
export const id="dl_52621c8e50184cb4bdcf";
export const url=new URL("../icons/lucid_2-hourglass.svg?v=0fc6a4b657e66a8978f162114406f0a8316f3fafa001c40bf2143397ed3e428c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
