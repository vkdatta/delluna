export const name="rounded-plus";
export const id="dl_6307c6997864268dced8";
export const url=new URL("../icons/rounded-plus.svg?v=a738d60e6783b5d430cd03c6154054b7342b102084b9e220637d8791d488f0ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
