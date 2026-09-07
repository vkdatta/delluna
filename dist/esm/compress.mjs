export const name="compress";
export const id="dl_1327087c2ca249d18275";
export const url=new URL("../icons/all_60_named_svgs/compress.svg?v=9f9b9f316f2a9faf7c9d814c11b05235f9bcf3f60ec569f123c569068fa9e07b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
