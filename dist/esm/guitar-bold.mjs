export const name="guitar-bold";
export const id="dl_b30db119a1114f5384cc";
export const url=new URL("../icons/guitar-bold.svg?v=23b9af8feaa10ca5fa01980908634bc28548d45e41b31dada8b5a7ec2d7ada6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
