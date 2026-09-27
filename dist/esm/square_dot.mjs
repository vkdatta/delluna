export const name="square_dot";
export const id="dl_3739b3c687808cb3613f";
export const url=new URL("../icons/square_dot.svg?v=ca73afb5d325d134fea92418efb31224978e247dfddf76a9f54864f67af557d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
