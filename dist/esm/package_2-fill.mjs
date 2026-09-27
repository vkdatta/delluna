export const name="package_2-fill";
export const id="dl_ee46f567c3ba9aaaa2d0";
export const url=new URL("../icons/package_2-fill.svg?v=497a5644f38fc40aa07b1b3cd1f6ba7340663e85b43b59f46d924d484c9b21c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
