export const name="cloud-lightning-fill";
export const id="dl_2d19854aab0941b2a590";
export const url=new URL("../icons/cloud-lightning-fill.svg?v=ef56c79187291010d30e2e6766e01b97db1fe27f75148c63587e486e9ef24f42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
