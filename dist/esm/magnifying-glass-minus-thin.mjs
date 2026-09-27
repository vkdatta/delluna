export const name="magnifying-glass-minus-thin";
export const id="dl_23ecef32897b48c8b76e";
export const url=new URL("../icons/magnifying-glass-minus-thin.svg?v=63d7fa6ae3a2e9d18e77e69240dfa0a74dde894ee8734abf9ec80f204f4362ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
