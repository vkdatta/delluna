export const name="corners-out";
export const id="dl_84afe6baac3746aabf4a";
export const url=new URL("../icons/corners-out.svg?v=a2fd16479b3f6844fa745098f9cd9b0e598c405fb09768f36b83335a672dee3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
