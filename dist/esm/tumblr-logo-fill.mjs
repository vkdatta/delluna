export const name="tumblr-logo-fill";
export const id="dl_586ce61ebaad466f77a2";
export const url=new URL("../icons/tumblr-logo-fill.svg?v=4a16bec461823235b0f6aa7773d476fb2cf15cefd35f222aafbc2d729d87104f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
