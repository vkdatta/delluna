export const name="file-c-duotone";
export const id="dl_d2ca261b958d48ee95f9";
export const url=new URL("../icons/file-c-duotone.svg?v=d593144bf74efc58cb12dced32b18b50f8cdd839ad2735210ec6eb0f92fb56eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
