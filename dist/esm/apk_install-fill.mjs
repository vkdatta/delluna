export const name="apk_install-fill";
export const id="dl_49904db522d50451d185";
export const url=new URL("../icons/apk_install-fill.svg?v=c288e20ac9b6714f98123213699c98516f5238bf434dddc7549a0a639014dfd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
