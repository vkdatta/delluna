export const name="earbuds_2";
export const id="dl_f78c8599f03bd5bbfe90";
export const url=new URL("../icons/earbuds_2.svg?v=a3f0366539da27f65547b8bfafae19ca54536c79ce0fcef83aefce708edffeff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
