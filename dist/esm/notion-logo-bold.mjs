export const name="notion-logo-bold";
export const id="dl_ef7d911f419f4e8fbc05";
export const url=new URL("../icons/notion-logo-bold.svg?v=a3a3a1b2aad2395f36a1c062dd8bf0e52ca8cb85d618d1dc37fe15c7586cedda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
