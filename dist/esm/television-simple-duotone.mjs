export const name="television-simple-duotone";
export const id="dl_f46275cfc981395221ad";
export const url=new URL("../icons/television-simple-duotone.svg?v=ec87228780e7814d7997949877a0bf5970598737ab68f22b53f651ec716318ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
