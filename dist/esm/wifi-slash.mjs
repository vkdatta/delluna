export const name="wifi-slash";
export const id="dl_1fdb23cae0c91ef65789";
export const url=new URL("../icons/wifi-slash.svg?v=acbc4f2e9c5e38a90cb80f150791f6a48038ef704aed9aef5ddbeff5523535b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
