export const name="line-vertical-fill";
export const id="dl_2e4bded8a2b74c7bb54c";
export const url=new URL("../icons/line-vertical-fill.svg?v=8f455ec8af4631b1a15141d1782f9c5af1f04560d38a42ba9863be0428a5d5ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
