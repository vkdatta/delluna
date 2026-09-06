export const name="arrow-circle-left-light";
export const id="dl_ae1735466f3344459667";
export const url=new URL("../icons/arrow-circle-left-light.svg?v=f5b96dbf12401ae507397dc88e73aaa2afb5ff2dc7480efac58f9ee447b7f0de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
