export const name="triangle-dashed-thin";
export const id="dl_2b30615eb44fa7b1592d";
export const url=new URL("../icons/triangle-dashed-thin.svg?v=691782c1b454377169f1387036d805d72c32e60ba4ca02663d1a200214a44517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
