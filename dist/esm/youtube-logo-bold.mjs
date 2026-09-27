export const name="youtube-logo-bold";
export const id="dl_a47f3536b706cf8fd02e";
export const url=new URL("../icons/youtube-logo-bold.svg?v=cc32bf3a64e19c6a7eca68314ccacf8f14857e5e43e3cb84f05f9a4f2e87fe46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
