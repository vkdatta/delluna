export const name="arrow-u-left-up";
export const id="dl_74f0315fb02747c89ba6";
export const url=new URL("../icons/arrow-u-left-up.svg?v=6aa8b546ef46e25c9d62b0ea4d83b93ae02c72ea86d1a85f5c2fa412d697cc24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
