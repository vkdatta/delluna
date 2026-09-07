export const name="facebook-logo-bold";
export const id="dl_de6eb3496b854c4fb2dc";
export const url=new URL("../icons/facebook-logo-bold.svg?v=3fc80a1071947660144212ff63782125e7dd660b93d902037ec5095164182b5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
