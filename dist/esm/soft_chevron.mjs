export const name="soft_chevron";
export const id="dl_3d16a0a94721480392de";
export const url=new URL("../icons/soft_chevron.svg?v=e44ce1928594f47bd38deb6f3a15e70b2035bed3a52d173e6c790d82da7f5de6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
