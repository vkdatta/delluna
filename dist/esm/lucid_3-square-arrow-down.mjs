export const name="lucid_3-square-arrow-down";
export const id="dl_62d1fcacb07745908f71";
export const url=new URL("../icons/lucid_3-square-arrow-down.svg?v=a1fbbbb8a30e337725bbd515e35b1c40b9baf5d7a6a3cc2c89ff974c0355e91b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
