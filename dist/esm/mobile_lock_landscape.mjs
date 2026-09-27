export const name="mobile_lock_landscape";
export const id="dl_03a862484837b892017a";
export const url=new URL("../icons/mobile_lock_landscape.svg?v=3f70b76c5e6b996eb23e9e9d954a2f0c97182eafa5b32ee58fc5fe150574b199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
