export const name="lucid_2-face-slightly-frowning";
export const id="dl_443ccb1c8d67491491e2";
export const url=new URL("../icons/lucid_2-face-slightly-frowning.svg?v=2894389cedd70fac4b8b3d1357e608e9700e280f7410ed07c393fec61a5bf5e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
