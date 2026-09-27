export const name="soundcloud-logo-light";
export const id="dl_928fff3299a81a512869";
export const url=new URL("../icons/soundcloud-logo-light.svg?v=82d27eb0d739a683adf5531bc118eca91a99df3433bd9e7963a132401c9d689c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
