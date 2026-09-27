export const name="collapse_left";
export const id="dl_40c03916cd73e0f3c640";
export const url=new URL("../icons/collapse_left.svg?v=9ac67ddf901c4e8cf1970a71e42cc9d911e653c7ae9aaf0f394a80dffbd89501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
