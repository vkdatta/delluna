export const name="house-simple-duotone";
export const id="dl_294d8bd977cd4b3d88a1";
export const url=new URL("../icons/house-simple-duotone.svg?v=0f1a4a520582747e37d0ee2e9fa9a7712d5569f6a103b890bbbae77242457008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
