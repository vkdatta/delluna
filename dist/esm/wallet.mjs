export const name="wallet";
export const id="dl_0e80cceedc10ed7f4c2c";
export const url=new URL("../icons/wallet.svg?v=61d065979a72bcaee7400a021dd6113360640f59dd760c110a89045072191b57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
