export const name="person-simple-hike-light";
export const id="dl_04858c89138f4624bca8";
export const url=new URL("../icons/person-simple-hike-light.svg?v=a97f6c48bc8fb5354031fcfd0b8abd7398eb320bd9e36f403e7cdfc5c9a8e4fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
