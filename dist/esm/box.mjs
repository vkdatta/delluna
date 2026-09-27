export const name="box";
export const id="dl_77430181c2640199b74a";
export const url=new URL("../icons/box.svg?v=a3e488357372771ecd096697155ae1359bff76ad9932580bc264cb510176b92b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
