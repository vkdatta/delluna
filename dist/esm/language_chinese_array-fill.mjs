export const name="language_chinese_array-fill";
export const id="dl_ecd2555720a39c7e4254";
export const url=new URL("../icons/language_chinese_array-fill.svg?v=a825e629926bd44b62d37448f882c46d9b32d93698672a286afaeaeab47766c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
