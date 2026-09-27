export const name="baby-duotone";
export const id="dl_735c0e9874334d1a8130";
export const url=new URL("../icons/baby-duotone.svg?v=a4a4381d9c07ca81fc787955edc32ba3fdf763614f6c6e06f6dfb58ee53c08ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
