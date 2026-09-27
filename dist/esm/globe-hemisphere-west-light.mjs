export const name="globe-hemisphere-west-light";
export const id="dl_8a196b4761e247f3a909";
export const url=new URL("../icons/globe-hemisphere-west-light.svg?v=db2ad2b77198de837a6310398556c25af7fbfe25bfd3e3190c4ba9db47cc3fec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
