export const name="speaker-high-thin";
export const id="dl_b71179515ac04ae9be02";
export const url=new URL("../icons/S/speaker-high-thin.svg?v=d50b4ef2cd36bf9e9ee16c2bb271d375beb9324050dfee83668390f837851824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
