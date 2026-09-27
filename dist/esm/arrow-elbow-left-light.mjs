export const name="arrow-elbow-left-light";
export const id="dl_cfa9fa22d4c24e50bf3f";
export const url=new URL("../icons/arrow-elbow-left-light.svg?v=2825a4056c6ea9b1c2cd9f3a6530d1a41397fc87e581f736781736fef0919722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
