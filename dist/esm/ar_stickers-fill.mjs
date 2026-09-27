export const name="ar_stickers-fill";
export const id="dl_48bc303e6b368ad7795c";
export const url=new URL("../icons/ar_stickers-fill.svg?v=661b1f1e4ad6e935180ffc1007b97ad26e200bf689ba60b54660f73fe78a6990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
