export const name="eye-duotone";
export const id="dl_8c9f296442044c1b8f9a";
export const url=new URL("../icons/eye-duotone.svg?v=c76afef21c34e6c8ef1dd5592cd9da8d4e878ea9f0b95eb93b166ab07a9e80d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
