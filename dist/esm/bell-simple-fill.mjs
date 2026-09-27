export const name="bell-simple-fill";
export const id="dl_79a41b0849204e569fd2";
export const url=new URL("../icons/bell-simple-fill.svg?v=f0caa4b1378081a5668b696e06a74bb6c258b2e1ee069e692e47c332dde3e3af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
