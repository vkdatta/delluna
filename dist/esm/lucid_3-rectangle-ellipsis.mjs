export const name="lucid_3-rectangle-ellipsis";
export const id="dl_4aeb35f4037e4cec93d5";
export const url=new URL("../icons/lucid_3-rectangle-ellipsis.svg?v=d664173a2fd4325aa3cc17fe68e8f6a16bb91b48ff1dfb48b4d0c44007f4e653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
