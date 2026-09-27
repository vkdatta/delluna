export const name="smoking_rooms-fill";
export const id="dl_0f6bf228e6ba02e93ff3";
export const url=new URL("../icons/smoking_rooms-fill.svg?v=a669db6314aa282db7608219a9f3376d5f873a9706656a5dc9c9d4249b3a8f6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
