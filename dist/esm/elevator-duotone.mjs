export const name="elevator-duotone";
export const id="dl_91f36e9bb9ee455db642";
export const url=new URL("../icons/elevator-duotone.svg?v=3ab34e35adbce03c2628c83306a8f4d48eca2225e0bab9f539996a898e2753dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
