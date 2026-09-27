export const name="text-columns-duotone";
export const id="dl_4e0f71a97b8af2c05680";
export const url=new URL("../icons/text-columns-duotone.svg?v=78088a10dc1965ae8af5298da7d637f809c733857104f31bcfcf955ca99ef83a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
