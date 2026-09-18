export const name="font_download_off";
export const id="dl_cc6d060469594784968e";
export const url=new URL("../icons/font_download_off.svg?v=27772bb184d0743c14f43ac89cbfa9e0de109640a4b8fda7c335b4452fa9e602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
