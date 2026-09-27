export const name="push-pin-thin";
export const id="dl_4f70597dd0334cfe8c60";
export const url=new URL("../icons/push-pin-thin.svg?v=616d098d13585d399a05d946141a964a0eba27b6fbb719cbae279b1fb6f10d1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
