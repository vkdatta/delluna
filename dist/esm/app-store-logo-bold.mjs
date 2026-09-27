export const name="app-store-logo-bold";
export const id="dl_412ba5689fa348d1992b";
export const url=new URL("../icons/app-store-logo-bold.svg?v=e0a24d786d8478261bafd9df3fce455a1bc3516930a850279a93cd349ee8013c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
