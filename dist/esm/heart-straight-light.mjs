export const name="heart-straight-light";
export const id="dl_c58feda2ddec4708af95";
export const url=new URL("../icons/heart-straight-light.svg?v=1d9bdce4b3c5c3b60e84f815eff3125edc3b5efb47f8a81fc175ade054f908c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
