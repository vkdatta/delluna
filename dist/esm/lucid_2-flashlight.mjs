export const name="lucid_2-flashlight";
export const id="dl_bda7add5ad344c37b506";
export const url=new URL("../icons/lucid_2-flashlight.svg?v=b870e98e91358ba38f2f086ea18c8b0f770617cca999ddd6887b6b72987f1ecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
