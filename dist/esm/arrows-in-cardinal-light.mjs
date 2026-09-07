export const name="arrows-in-cardinal-light";
export const id="dl_6d46af38b94745f29a8f";
export const url=new URL("../icons/arrows-in-cardinal-light.svg?v=5510563f18efdd61a4306151c8c7705af741b05c7eb8db80edc8fdff90cfbc6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
