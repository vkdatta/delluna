export const name="phone_locked";
export const id="dl_a68a9b5669e84fd5a169";
export const url=new URL("../icons/P/phone_locked.svg?v=b2f6441fee542f86e0de9ad9ef22cd064f2950795ce1f0870d1bb8d20675582d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
