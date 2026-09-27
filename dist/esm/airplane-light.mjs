export const name="airplane-light";
export const id="dl_6cd0688bf9dd4b068ffa";
export const url=new URL("../icons/airplane-light.svg?v=f61c003caf61edabeafb73722d36e23e98f250ecf002aa13243dbab9b72eda5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
