export const name="sun-thin";
export const id="dl_8f096104c25c9ccd9b51";
export const url=new URL("../icons/sun-thin.svg?v=ebcba21c04cf77627075ae147da585db5c955907c6c207dbad6d52ea20b4871c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
