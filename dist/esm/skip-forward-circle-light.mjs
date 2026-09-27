export const name="skip-forward-circle-light";
export const id="dl_b282847e3ba365b1e84c";
export const url=new URL("../icons/skip-forward-circle-light.svg?v=03110b607ba1a0b071ad54f84ce5ae6d03bf700850a0aaeea2a3de383c74a3bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
