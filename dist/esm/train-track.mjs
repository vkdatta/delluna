export const name="train-track";
export const id="dl_07d631d9d8404feba620";
export const url=new URL("../icons/train-track.svg?v=37c486fd8d9f4ffc35b0e3741b3c8640212b6844477a0a8514b781022013a2e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
