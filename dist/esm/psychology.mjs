export const name="psychology";
export const id="dl_598638e49f9144c49fd8";
export const url=new URL("../icons/psychology.svg?v=a984c7c688924fa62e8436f1193ee70cb868b7a4180382c9e9bbda90b211d705",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
