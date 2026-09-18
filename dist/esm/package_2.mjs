export const name="package_2";
export const id="dl_2067d252609c4799a2b4";
export const url=new URL("../icons/package_2.svg?v=bef65a172bf7adb48407ecceb3a48f1355b74d9420849e55b0c23aeb69bd934f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
