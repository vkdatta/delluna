export const name="gpp_bad";
export const id="dl_3975f209db3bc126f9c2";
export const url=new URL("../icons/gpp_bad.svg?v=fe2bedfe5524f465e431a86a87e7ed5c30e574fbebe4f2472b061b794214ecb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
