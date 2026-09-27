export const name="device-mobile-speaker";
export const id="dl_7737f4c4110c4b149c9c";
export const url=new URL("../icons/device-mobile-speaker.svg?v=cfe6fae8b55e369ac602d48a7666eb9234a51a172df0eb953178f5ddee18b2b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
