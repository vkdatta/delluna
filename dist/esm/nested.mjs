export const name="nested";
export const id="dl_9f91ba49691444e4ac7d";
export const url=new URL("../icons/nested.svg?v=2b83480339e5a3ffd01a9e8d204ed1dcedcfabbdfac29ca5aa7f91e8ff6c16af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
