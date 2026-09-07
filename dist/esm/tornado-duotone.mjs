export const name="tornado-duotone";
export const id="dl_bbb0889ef2cf41a09d7e";
export const url=new URL("../icons/T/tornado-duotone.svg?v=38b4062a6e319bb35e84bce19c921c42df13cf63bff33cd40a4e3a6f496567ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
