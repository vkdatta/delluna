export const name="stripe-logo-light";
export const id="dl_fb678d23c2a27a8fd1f6";
export const url=new URL("../icons/stripe-logo-light.svg?v=da08d29cbb91002e9e86c1d06b28d066fc0251ba7bceaafb4c4eeeff6a14bcb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
