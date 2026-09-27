export const name="7k-fill";
export const id="dl_d55f6a6446a7f68021be";
export const url=new URL("../icons/7k-fill.svg?v=5b873191a8b38f1431b2460b851b55a397b80e4d4603f436b844cede08a838ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
