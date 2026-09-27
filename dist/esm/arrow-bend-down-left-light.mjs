export const name="arrow-bend-down-left-light";
export const id="dl_92dacd9569a344f783ca";
export const url=new URL("../icons/arrow-bend-down-left-light.svg?v=2dc8cb249cae8a31da8f7cb7fd6691b5be93e0a9ee5d861d526432f98fe999f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
