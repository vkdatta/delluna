export const name="function_box";
export const id="dl_71cdbdbbb1bf47aba224";
export const url=new URL("../icons/function_box.svg?v=8d0299a1696de6bec89fad579cdd8b91380dc3fd82804a62422a4e554626de84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
