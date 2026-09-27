export const name="brightness_1";
export const id="dl_9ea04552f156be067b02";
export const url=new URL("../icons/brightness_1.svg?v=074f73e08a9225cc52350bb85ffd9c8b200d7315c7fd2f6a9af8e60b0da1d2f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
