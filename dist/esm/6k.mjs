export const name="6k";
export const id="dl_3f90a0465a8944788737";
export const url=new URL("../icons/6/6k.svg?v=f275f9b54438d68a8ab20f20f9579ec12322c268ebcaa8d4a00151b2e280cf10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
