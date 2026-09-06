export const name="lucid_1-bookmark";
export const id="dl_9e4d90ac12bf4749a1f5";
export const url=new URL("../icons/lucid_1-bookmark.svg?v=ace355f1241d8624c3781d8f3c78f261e4aaf864454e7cb5c8e8952605e1dd17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
