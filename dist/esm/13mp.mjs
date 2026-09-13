export const name="13mp";
export const id="dl_c5eed2819d0b4a99a0d1";
export const url=new URL("../icons/1/13mp.svg?v=a6cd2e5077f8e4d9dd02a52599c9a16b383827ddd3b99616f4d52be8cbf0e220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
