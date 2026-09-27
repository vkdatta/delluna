export const name="mail_shield";
export const id="dl_b6e44fc1b19420d2d2fb";
export const url=new URL("../icons/mail_shield.svg?v=5cb84a2a74d4d04cf8bde7c5d537b50b33442337be47edda5cc8fc108da89bf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
