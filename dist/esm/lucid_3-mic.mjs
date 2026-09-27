export const name="lucid_3-mic";
export const id="dl_aebfb823f9234c09bf8e";
export const url=new URL("../icons/lucid_3-mic.svg?v=a45e5cdf1360df0a31c35a18e9db62f223b64632b2b7aa9afc0b643ec535ad0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
