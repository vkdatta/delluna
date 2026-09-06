export const name="list-plus-bold";
export const id="dl_f23e3ddb4a2d4d1c81f4";
export const url=new URL("../icons/list-plus-bold.svg?v=2cbaed93680acdab4bfafb0b71ea01d7290a20fc62a27d1c21726cc57a411b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
