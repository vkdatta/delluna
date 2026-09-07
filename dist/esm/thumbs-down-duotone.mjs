export const name="thumbs-down-duotone";
export const id="dl_1f5e89af3cf14c3c9804";
export const url=new URL("../icons/T/thumbs-down-duotone.svg?v=e176d105980b6dc0429946713b8154c57a2eb71c1f6dcdeda979b0cffa6d0679",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
