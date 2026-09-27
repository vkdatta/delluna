export const name="security_key";
export const id="dl_dfb58bc846d85f22a528";
export const url=new URL("../icons/security_key.svg?v=c391ab63e1c2b0167efa8952e779d3a99f41a8e2807af263a4605fc52c5b22f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
