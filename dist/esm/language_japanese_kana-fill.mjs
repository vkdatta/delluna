export const name="language_japanese_kana-fill";
export const id="dl_825a0954a7b41bae94cc";
export const url=new URL("../icons/language_japanese_kana-fill.svg?v=753c4ffc365b5bce92e5d3b710498d1760656551a61c18bf79437aace26a98e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
