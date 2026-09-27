export const name="flower-tulip-bold";
export const id="dl_674ff148b8b54a0da87b";
export const url=new URL("../icons/flower-tulip-bold.svg?v=5be0fcde236ba849c4b0b8f682e7aa2befecb7c59c9a00f4cb03d09ff9bd33a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
