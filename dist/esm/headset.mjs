export const name="headset";
export const id="dl_1718bcf5f63c4a9e81f1";
export const url=new URL("../icons/headset.svg?v=c8c2456695b643e9aaf112800e82224c503a124adfd36ba8e9dbb6493a25edb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
