export const name="lock-duotone";
export const id="dl_3b03d22f5a1e4b209e8b";
export const url=new URL("../icons/lock-duotone.svg?v=d283dc7e3d0bc86dfc953e467e33dca29b5e661471e6e6b2b29edc4b1db4d5da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
