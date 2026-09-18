export const name="mobile_landscape";
export const id="dl_af6c2fef3799407fac90";
export const url=new URL("../icons/mobile_landscape.svg?v=357efc6fcadc5d8ba80c5b8206f5beae8955291517ab2b7417a2cb2acfb57aa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
