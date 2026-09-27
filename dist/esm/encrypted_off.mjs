export const name="encrypted_off";
export const id="dl_8aee790dd85b03828aa5";
export const url=new URL("../icons/encrypted_off.svg?v=aebe091682030971d35b7f33d0e81ebde0f95d03d14ff4629b4710a3a0a01f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
