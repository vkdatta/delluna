export const name="court-basketball-light";
export const id="dl_b9ce11a285d946e5868f";
export const url=new URL("../icons/court-basketball-light.svg?v=1fb5fd1edc37438568d37e32ce9b2b498cbcdb8536f8a81c27c294e47bceafb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
