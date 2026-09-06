export const name="number-circle-two-light";
export const id="dl_7c805359eb34494e9332";
export const url=new URL("../icons/number-circle-two-light.svg?v=1b1dd8c49452e6b6ebcdc33fef80a6b62a0a05b58f1af2acae63ee662207a189",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
