export const name="gradient-duotone";
export const id="dl_f8f5833abb5f4e1daaaf";
export const url=new URL("../icons/gradient-duotone.svg?v=9a2ee1af6ad5524dbcdc53ac32d79d0bbb8ced16123346d254eba7058ac8649e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
