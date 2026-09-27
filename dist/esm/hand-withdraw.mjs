export const name="hand-withdraw";
export const id="dl_3e7651742dfd47f0ae0c";
export const url=new URL("../icons/hand-withdraw.svg?v=894d1802298327ee88645a4d06055707aa2015f2459376d1f7991946286f8ae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
