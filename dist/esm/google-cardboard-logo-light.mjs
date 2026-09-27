export const name="google-cardboard-logo-light";
export const id="dl_8ccec47bf97f4da398f8";
export const url=new URL("../icons/google-cardboard-logo-light.svg?v=76b02d7ed60508423376de0d7d6b7a0c2801bdb2a111bdabf11d97e5f080f07c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
