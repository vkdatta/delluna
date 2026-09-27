export const name="file-archive-bold";
export const id="dl_996a4aa506484cd5a49f";
export const url=new URL("../icons/file-archive-bold.svg?v=c7794710a80374bc12d12ebf9cae53c1f0cf4098ef02cb2c66e926aafce05034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
