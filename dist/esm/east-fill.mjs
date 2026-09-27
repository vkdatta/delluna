export const name="east-fill";
export const id="dl_89a2df4ee21368337a0a";
export const url=new URL("../icons/east-fill.svg?v=23993b1871774441664a4d924c638bd66d487ab357b2477acf7c24b247b77d82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
