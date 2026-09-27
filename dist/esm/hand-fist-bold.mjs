export const name="hand-fist-bold";
export const id="dl_a6206b2af9ef4c06be75";
export const url=new URL("../icons/hand-fist-bold.svg?v=7b3c78e9e2cda26ea5cc81a485f6899fdd2a9b11f38d3c4d7e257162c83d2392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
