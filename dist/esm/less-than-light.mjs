export const name="less-than-light";
export const id="dl_976ecf6ba56243caab8c";
export const url=new URL("../icons/less-than-light.svg?v=4d621808f1e06f86d1d6add113e4f8b0ec887b7a52200327adadbd714963d494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
