export const name="file";
export const id="dl_cd68687aa5572e33c917";
export const url=new URL("../icons/file.svg?v=349c3c6dd350b8a8f6048cbd7e17587c32a19813a5558770d58c126b9aff1d89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
