export const name="mobile_cast";
export const id="dl_ba4b7f1ad0a395f92587";
export const url=new URL("../icons/mobile_cast.svg?v=fa6985f3ed8026e54cda7c686f9f02aa035b00f578cf93f580fe4231f8a4b571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
