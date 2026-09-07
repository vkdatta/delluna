export const name="wechat-logo-bold";
export const id="dl_f52ac1f32d0442228550";
export const url=new URL("../icons/W/wechat-logo-bold.svg?v=c14c88c25cd048b5b4cbccf8ffceaa2983135c193a4515b4b35d535469298d4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
