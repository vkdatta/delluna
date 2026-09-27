export const name="folder_code";
export const id="dl_904436c5c342ac3005a9";
export const url=new URL("../icons/folder_code.svg?v=17f95ba085e9ca789e573d47d28fab81b4caa97ba43ca456ab2dc401d0de46f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
