export const name="stack-plus-duotone";
export const id="dl_5469801307e9b99e8363";
export const url=new URL("../icons/stack-plus-duotone.svg?v=853fb8485e118e7dd227781ac19ba880247d634732a759c09251a91561595862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
