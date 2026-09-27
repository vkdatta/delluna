export const name="weekend-fill";
export const id="dl_55fbc2f085dbea96808f";
export const url=new URL("../icons/weekend-fill.svg?v=393adb533bc8a51bd15bdcc9866096a5a5c553bc6e141b2f422b6c52a6618631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
