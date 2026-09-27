export const name="co2";
export const id="dl_1b9db50db84b9e79fe29";
export const url=new URL("../icons/co2.svg?v=cc242260e483f359b0a1b3ec0f66e1da9de076919f1056e697df0acd93965dd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
