export const name="lucid_1-boom-box";
export const id="dl_b76318ff36414d7a8d3b";
export const url=new URL("../icons/lucid_1-boom-box.svg?v=6b8832ba3090ddc5b242ef3066b33b414dc152d2626964ee955758fb536ee20d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
