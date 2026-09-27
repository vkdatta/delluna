export const name="airplane-light";
export const id="dl_6cd0688bf9dd4b068ffa";
export const url=new URL("../icons/airplane-light.svg?v=f36f4f4cc89ae127ee00e9378287ea33e7966df5c1458a3e8b75424af5f5599f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
