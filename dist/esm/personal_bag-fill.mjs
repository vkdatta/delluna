export const name="personal_bag-fill";
export const id="dl_65d1ec0195ae47b73ee1";
export const url=new URL("../icons/personal_bag-fill.svg?v=7958db761f2fede127ac31607f9f6fed396beca4038712e0f159850d853ac627",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
