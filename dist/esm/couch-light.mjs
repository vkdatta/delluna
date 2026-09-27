export const name="couch-light";
export const id="dl_b07c00b4b315423897eb";
export const url=new URL("../icons/couch-light.svg?v=aeed51cc7692b0d2cf0f8d33faf922daa9deb7ccc13be26bc7767d2c367d49d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
