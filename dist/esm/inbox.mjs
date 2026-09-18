export const name="inbox";
export const id="dl_116ff522ad2741459ff5";
export const url=new URL("../icons/I/inbox.svg?v=cf782a02ab1068ce9362c518a74abbdb57dbd2814d1d57d0a62c7886cf530687",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
