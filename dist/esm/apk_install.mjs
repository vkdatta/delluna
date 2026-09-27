export const name="apk_install";
export const id="dl_37c57111859df9220e19";
export const url=new URL("../icons/apk_install.svg?v=765a70292d7b3146105e9eb8c3bff4d8c3f87f3cb5b5714edbd1a3532211e9d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
