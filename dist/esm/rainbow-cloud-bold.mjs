export const name="rainbow-cloud-bold";
export const id="dl_a16ae6bbb0a9450f9a3e";
export const url=new URL("../icons/rainbow-cloud-bold.svg?v=7f05e7c3c5f4843e5f8bfd5b7a763f10a56b6f484d92844e760fe5e5d8621757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
