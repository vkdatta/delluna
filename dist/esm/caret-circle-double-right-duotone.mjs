export const name="caret-circle-double-right-duotone";
export const id="dl_1ad617691153480ebd5a";
export const url=new URL("../icons/caret-circle-double-right-duotone.svg?v=24e8eaef4bdccece4d826c5d81a962758d3791206601afd0bb4e221d036a7679",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
