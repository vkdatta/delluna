export const name="equalizer-fill";
export const id="dl_75a40964da1b4adfb918";
export const url=new URL("../icons/equalizer-fill.svg?v=22774cb11c47ca310f82a9567abc1527714f8622a590a3690a5328c3963e896f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
