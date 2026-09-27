export const name="upload";
export const id="dl_6698002408934c3eaa08";
export const url=new URL("../icons/upload.svg?v=de8e765aa2218e9697d27b5050e614c666d43d950e31c3b3dd566af608b16c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
