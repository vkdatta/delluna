export const name="apk_install";
export const id="dl_a0c11a2c9dd2af567224";
export const url=new URL("../icons/apk_install.svg?v=b896868f96be3cc02b25c53a3850b6a87d1f41663097175001d7e72f45cfc937",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
