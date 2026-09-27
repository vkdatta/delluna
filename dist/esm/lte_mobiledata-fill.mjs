export const name="lte_mobiledata-fill";
export const id="dl_705ffae0e46fc8253497";
export const url=new URL("../icons/lte_mobiledata-fill.svg?v=f05b5146c7e36e6856f6148810811485c96a68a765d80244ed0a5fce0fefeeb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
