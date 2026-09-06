export const name="hand-grabbing-light";
export const id="dl_d84674f16d5d43a0a9f9";
export const url=new URL("../icons/hand-grabbing-light.svg?v=15a418a05806534582abab503e49c80ce92ab6801c381be96d34903201dd17ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
