export const name="cloud_download";
export const id="dl_d6ef8272179cd9fbf379";
export const url=new URL("../icons/cloud_download.svg?v=7b3fef85b49e4ed638f49153ff0df87b41f92c4de53c7300d5bf004915c4bacb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
