export const name="general_device";
export const id="dl_3179c2a0196cf4ad7035";
export const url=new URL("../icons/general_device.svg?v=e768710939d46792d93d59cf952d176266c56ad45ef6c1fc89d933d14a9a90e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
