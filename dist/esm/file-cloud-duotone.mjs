export const name="file-cloud-duotone";
export const id="dl_34021d70f16243399047";
export const url=new URL("../icons/file-cloud-duotone.svg?v=e45a39fa303a4b12ad21ecf8c9bb3bb1c01f2eff03648b0ca88ed57e578cf8f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
