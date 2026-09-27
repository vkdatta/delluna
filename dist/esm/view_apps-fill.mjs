export const name="view_apps-fill";
export const id="dl_71e9b048de78d38f921c";
export const url=new URL("../icons/view_apps-fill.svg?v=5593e3226b2035e6150795852146b057af3990ce7aaef695acf5e2c9d9786cee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
