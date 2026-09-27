export const name="battery_android_5-fill";
export const id="dl_978587d8272e10bc317a";
export const url=new URL("../icons/battery_android_5-fill.svg?v=0baffe71f5a6aa315444777962bd1cfa21f1bddee025056799943bd57878313f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
