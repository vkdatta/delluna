export const name="stool-bold";
export const id="dl_09e3be99732baa16a4aa";
export const url=new URL("../icons/stool-bold.svg?v=11884d59f5c8381f6bf8f38062bfa61bf6cbdd9bd0ce4f406ea5e9ff9c976022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
