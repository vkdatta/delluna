export const name="approval";
export const id="dl_6b4d05a015fbb560e190";
export const url=new URL("../icons/approval.svg?v=85a0a62a5f887fb26cb8b2c78f7322ceae8cdb8bc6647e6ec4e5cc278cf0763c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
