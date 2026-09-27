export const name="switch";
export const id="dl_b8f931cba1245ac73e4e";
export const url=new URL("../icons/switch.svg?v=89807d83f14483272084b56ad5909a0998c35d8cf3ab1664175d9f652853ea06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
