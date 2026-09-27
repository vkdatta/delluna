export const name="lucid_2-hand-fist";
export const id="dl_76c96203e09e4217a22a";
export const url=new URL("../icons/lucid_2-hand-fist.svg?v=2847ada3937ff435b2344c8008e9250b3272e18529683b3b2782376b7bd0b12a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
