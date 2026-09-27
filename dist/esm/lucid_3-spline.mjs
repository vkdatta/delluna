export const name="lucid_3-spline";
export const id="dl_8b0bdc8c7451471d91d1";
export const url=new URL("../icons/lucid_3-spline.svg?v=a78b7e43d0e2e7453ab237d0ab42b6be645d0a81556a15214ab40f6a4803dad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
