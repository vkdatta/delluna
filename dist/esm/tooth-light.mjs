export const name="tooth-light";
export const id="dl_0191a47d87c4ce914c4e";
export const url=new URL("../icons/tooth-light.svg?v=6c3a10f8e4c62fbccd3ba39b07b4ae09a5e5e7faa2bcdb773aa09ccbeda007c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
