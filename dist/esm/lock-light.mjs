export const name="lock-light";
export const id="dl_534bb4c24c7c483c9b88";
export const url=new URL("../icons/lock-light.svg?v=74277d3fff7470b2b12765465eb1595e9f1cd5592e0a0656d5c4fb9daa509a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
