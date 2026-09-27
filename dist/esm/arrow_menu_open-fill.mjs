export const name="arrow_menu_open-fill";
export const id="dl_97bb8da78ff3937dca7b";
export const url=new URL("../icons/arrow_menu_open-fill.svg?v=efdba305b128ce1d687e1e52a9b7b6ae78da2fb2c72815b8fe72c4e1f1c4b8f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
