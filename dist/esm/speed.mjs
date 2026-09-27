export const name="speed";
export const id="dl_4591dcc1baf980060dd4";
export const url=new URL("../icons/speed.svg?v=b0beb97bd543bea40d0781cd43f6ed181dad2d1c1ea899454fb3b5e8a2ded96d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
