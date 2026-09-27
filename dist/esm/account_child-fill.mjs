export const name="account_child-fill";
export const id="dl_0ca407ec64b7ca915425";
export const url=new URL("../icons/account_child-fill.svg?v=438b1dc2fed514075eaac2783ee4931fe825ea50443122dddc3cbf1b6e45a41c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
