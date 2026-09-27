export const name="files-thin";
export const id="dl_3e45f658d1db4b18b82b";
export const url=new URL("../icons/files-thin.svg?v=342e623001e0f1cf2b0a63b1de7069e70d53c7fc16ba50badf5fdacd95e24b29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
