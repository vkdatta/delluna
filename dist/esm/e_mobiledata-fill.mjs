export const name="e_mobiledata-fill";
export const id="dl_8e874d5b4a6e7b265345";
export const url=new URL("../icons/e_mobiledata-fill.svg?v=43741811425c65e9946e0c3bfaea92d2d03031fd86436dd13d0c761e70e51b5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
