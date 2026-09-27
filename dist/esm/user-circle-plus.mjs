export const name="user-circle-plus";
export const id="dl_f8b07180e262f882af96";
export const url=new URL("../icons/user-circle-plus.svg?v=e0e373e6c7181c01672b79f9ccb4a8baa2202561e7245f23e42c96a006aedc26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
