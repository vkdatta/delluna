export const name="power-duotone";
export const id="dl_5b5721daf5c648078658";
export const url=new URL("../icons/power-duotone.svg?v=0bfb1bdc4683921d720b88cf0f657c7b69d2623530f1994594e4dc99191d04b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
