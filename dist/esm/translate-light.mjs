export const name="translate-light";
export const id="dl_fa20a53a2c744a1dbd33";
export const url=new URL("../icons/T/translate-light.svg?v=0eea1fd32c9acf73220cffd2950605ea91b2599f7e59eecdcbbbd7199eba95bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
