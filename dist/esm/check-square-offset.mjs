export const name="check-square-offset";
export const id="dl_0c529e852e5047dba609";
export const url=new URL("../icons/check-square-offset.svg?v=fc6dc9865818f9782c6d784e2b8c2edaecc551e5e2fa2d9f17352a27125f083d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
