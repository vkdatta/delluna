export const name="amazon-logo";
export const id="dl_c3a71e06398e4daa876b";
export const url=new URL("../icons/amazon-logo.svg?v=38cdd17c8785f81278fd5b831f9c887a761fd2de8748d1e7c56d735800ebe137",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
