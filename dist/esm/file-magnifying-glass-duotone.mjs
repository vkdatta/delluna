export const name="file-magnifying-glass-duotone";
export const id="dl_707962334c6c4cb99869";
export const url=new URL("../icons/file-magnifying-glass-duotone.svg?v=19a429897e8591d845fab7fac7dcdf0624f6c68985926402cb244f62f16c740b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
