export const name="phone-pause-bold";
export const id="dl_238d31f20362486fab98";
export const url=new URL("../icons/phone-pause-bold.svg?v=f24a01e5077e4efaa4694398ee628316d9960f29e25d7b79bfbc2ced40f9cc99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
