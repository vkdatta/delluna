export const name="bounding-box-duotone";
export const id="dl_707931f93d444f0d9cde";
export const url=new URL("../icons/bounding-box-duotone.svg?v=75bb61dd3f517e7ae9a9deb970cbff531f2e66c7fce059332a12c1c3e67e454b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
