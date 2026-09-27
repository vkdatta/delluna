export const name="microsoft-excel-logo";
export const id="dl_5195e105d2164f7fb26e";
export const url=new URL("../icons/microsoft-excel-logo.svg?v=07ba918bd42ac96615c67e16dee0110e199df42a1aabf61e534e12417dfef91d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
