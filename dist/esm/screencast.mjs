export const name="screencast";
export const id="dl_41318c1933cc4c2698b3";
export const url=new URL("../icons/S/screencast.svg?v=2245e0a4a14f671f0b5c0338702b4b7edd70deb7dad5b51fa43e7f47dcae4458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
