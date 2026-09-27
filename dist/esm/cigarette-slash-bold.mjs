export const name="cigarette-slash-bold";
export const id="dl_c31a4f0e23b14b9c8eb9";
export const url=new URL("../icons/cigarette-slash-bold.svg?v=c1ff9a2c68fb00908b31f8a0319d76f7220fa6d8b4202f1ccd846249f7dbfc7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
