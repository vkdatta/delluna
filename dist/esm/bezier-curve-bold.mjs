export const name="bezier-curve-bold";
export const id="dl_d5b0f38a8b9846878087";
export const url=new URL("../icons/bezier-curve-bold.svg?v=96a7d5e55a8ba6a34ac6278c635aceda3fed6000fefa6b9582651cb257905faa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
