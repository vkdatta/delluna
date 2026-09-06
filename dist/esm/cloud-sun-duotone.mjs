export const name="cloud-sun-duotone";
export const id="dl_7fdcc94cb2394560b0ac";
export const url=new URL("../icons/cloud-sun-duotone.svg?v=5c3ca930a501926897d6c10acf5dc79c3c6ff9d32c0a292608e1b7df2313c633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
