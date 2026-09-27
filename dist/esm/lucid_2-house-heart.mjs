export const name="lucid_2-house-heart";
export const id="dl_a2a2a09a08704402a314";
export const url=new URL("../icons/lucid_2-house-heart.svg?v=73023ed8d67af7c8636e7e7c3cbe6f98425940707c23f0e9506dfa2345e87a53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
