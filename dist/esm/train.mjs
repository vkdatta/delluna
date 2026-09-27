export const name="train";
export const id="dl_cc8642d5e9d1b8e18f91";
export const url=new URL("../icons/train.svg?v=35c38a7ad7c82e4710ea6e79f081c01d87f52188f62fba0d7445c8d678112a1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
