export const name="bounding-box-light";
export const id="dl_541c0fc841d04909bc48";
export const url=new URL("../icons/bounding-box-light.svg?v=87d2780a06b2bf6baab055a33a5ceca1f159662c66f07602260baa5bac66b80e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
