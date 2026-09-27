export const name="sign_language_off";
export const id="dl_6a4012de31f041a8bc25";
export const url=new URL("../icons/sign_language_off.svg?v=acf89780ee5027711565abd69089ef614ff7052f564a8273deb76e4263c9f8cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
