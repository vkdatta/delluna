export const name="arrow-counter-clockwise-bold";
export const id="dl_a941cf36d1c84a429670";
export const url=new URL("../icons/arrow-counter-clockwise-bold.svg?v=b02289073e6510dad9f74d1edfdfdd533ef848154fa6cb910a3302b960b533c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
