export const name="webcam";
export const id="dl_6d12e0a479464e3f9222";
export const url=new URL("../icons/webcam.svg?v=8091208582b216b368800f16f3e903b32d184d63f3b332ea61d4ba1a0b1e7184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
