export const name="pinterest-logo-duotone";
export const id="dl_77bb3b5b18534038a494";
export const url=new URL("../icons/pinterest-logo-duotone.svg?v=cdd404ca65dc8c7644dbe7c71622442afe6b55313a190988c3aa496f45f3e8cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
