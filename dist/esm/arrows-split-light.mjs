export const name="arrows-split-light";
export const id="dl_048ebcfee11a42f89c81";
export const url=new URL("../icons/arrows-split-light.svg?v=b3aa49fbe229fff77b5fb32d649a8a0d7a5939b221a41199b0e7b860c7e05f82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
