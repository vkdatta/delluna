export const name="shopping-bag-light";
export const id="dl_7845b41e77623d8c4eb0";
export const url=new URL("../icons/shopping-bag-light.svg?v=74f090c8b320715fed8180a2c3794174999382e0f8316421aa95ea23f0eb8551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
