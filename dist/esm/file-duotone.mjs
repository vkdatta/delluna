export const name="file-duotone";
export const id="dl_dc46bff1bc2a4c8fb351";
export const url=new URL("../icons/file-duotone.svg?v=adab4ccd99ba0cea14cdf7675742b724cd75ab69cb3f25011f6f7bb10950aa98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
