export const name="personal_places";
export const id="dl_9d979902c3c797d896ca";
export const url=new URL("../icons/personal_places.svg?v=bdba771c2e7d8770a2d4f565627c4fb895bc5ac3d215fc045892aafaf0d1cb22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
