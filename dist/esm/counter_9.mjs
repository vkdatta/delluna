export const name="counter_9";
export const id="dl_76fdd543eedf0cd9d245";
export const url=new URL("../icons/counter_9.svg?v=15ce5bc50de029999ba98b04353b195fb7e128b7c3ced55b1ff5dc28fb16cd20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
