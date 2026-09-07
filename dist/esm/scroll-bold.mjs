export const name="scroll-bold";
export const id="dl_bb9107ac8d1b47c291b1";
export const url=new URL("../icons/S/scroll-bold.svg?v=da83b1bb178c73e41fd11671da977893174fe0f0228db6cce18be636f7ae59d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
