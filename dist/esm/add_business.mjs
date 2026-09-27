export const name="add_business";
export const id="dl_364e967f9b28e787aebc";
export const url=new URL("../icons/add_business.svg?v=6dd7a2c6af7547dcf205522c3201d6aba06d709956eb920e0746f8214aee6aa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
