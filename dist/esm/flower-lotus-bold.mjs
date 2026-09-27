export const name="flower-lotus-bold";
export const id="dl_d6e0b1ab35c34e789825";
export const url=new URL("../icons/flower-lotus-bold.svg?v=e54c06c45e6d589a6d9f0d61e4050d4a9e47f3cf49269dccf7941690faeb93ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
