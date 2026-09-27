export const name="file-tsx";
export const id="dl_3ea0979fcb064a58bce3";
export const url=new URL("../icons/file-tsx.svg?v=88f01defdaa90a0ddf3aa320e754e7766d7a9f520748b5553bb6a8f4092ba952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
