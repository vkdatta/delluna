export const name="dots-three-outline-light";
export const id="dl_58a6a3aadfb44e7884a6";
export const url=new URL("../icons/dots-three-outline-light.svg?v=3fde7b2a5f69e25753bdb8982120415cbc1d028e5db456b5668ced8a0f6b3a82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
