export const name="password";
export const id="dl_b7460c5360014fc29f01";
export const url=new URL("../icons/password.svg?v=e0c6bc712889eb293d5aaba61cb1cd4eb9088ad3180a360d0490c8a2bff491be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
