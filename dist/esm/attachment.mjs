export const name="attachment";
export const id="dl_668ec04743283b9f538e";
export const url=new URL("../icons/attachment.svg?v=adaf929cc2a93586b6c1cf3cb552d78d108a454e6f97703e0c431f73d723370e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
