export const name="picnic-table-light";
export const id="dl_b405a0a3983545ec8735";
export const url=new URL("../icons/picnic-table-light.svg?v=323a98c5ac5f2512dbb9d4b35f3f695cec09092127d8a63be47458ab7ad5fa77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
