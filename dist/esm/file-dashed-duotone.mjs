export const name="file-dashed-duotone";
export const id="dl_8147ff17fd2a4bbc8d17";
export const url=new URL("../icons/file-dashed-duotone.svg?v=3b5f2c9df9e32e571509ba903afa989da5f9e763a412cb7a0b4331a81b710638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
