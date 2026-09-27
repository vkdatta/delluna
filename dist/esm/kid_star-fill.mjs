export const name="kid_star-fill";
export const id="dl_b67961ffa96dca0c6960";
export const url=new URL("../icons/kid_star-fill.svg?v=6b3c64c2c5c2a323fb6fd1586299afbdcd03c1696aba470423aad35ae6e4c160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
