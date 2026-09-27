export const name="time_auto";
export const id="dl_068f6f815968b7e1b39a";
export const url=new URL("../icons/time_auto.svg?v=30a001f7fee62b281a6c8312d35ffd8016f8af236f262e7db0b9e2586e4cb905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
