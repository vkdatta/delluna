export const name="markdown-logo";
export const id="dl_d9d5108a92314affb13f";
export const url=new URL("../icons/markdown-logo.svg?v=5f5f9359e0b869b2a0f405326ee64c632533aa10c533853f02d9756c7a49b4fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
