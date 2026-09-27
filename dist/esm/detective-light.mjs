export const name="detective-light";
export const id="dl_7caadc1468684fdbae7f";
export const url=new URL("../icons/detective-light.svg?v=11cfd3869cea3adb6dffe21fdc83e240072378dba32bfd6269eb49fd41bb7900",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
