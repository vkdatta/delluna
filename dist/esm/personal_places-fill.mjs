export const name="personal_places-fill";
export const id="dl_560a3c76f8aab85671f9";
export const url=new URL("../icons/personal_places-fill.svg?v=109a95417c970d8f36211bacab83ece5fe642730ae6b435083c6a4c30203d05c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
