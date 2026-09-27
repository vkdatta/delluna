export const name="gitlab-logo-simple-duotone";
export const id="dl_cd54c8d232054d22b3a7";
export const url=new URL("../icons/gitlab-logo-simple-duotone.svg?v=4785a47a91ba620c1d103d0884e557075b85433082bedfa1c91ddc4f5e7a20a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
