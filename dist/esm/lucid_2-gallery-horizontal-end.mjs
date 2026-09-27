export const name="lucid_2-gallery-horizontal-end";
export const id="dl_1fba4281eae64f7fb5e1";
export const url=new URL("../icons/lucid_2-gallery-horizontal-end.svg?v=e6601c74b4c1b852c283a2990390831171a313eda075e049d9914ea212ea8cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
