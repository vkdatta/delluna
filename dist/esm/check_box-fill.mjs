export const name="check_box-fill";
export const id="dl_5e397286bf33c01881bb";
export const url=new URL("../icons/check_box-fill.svg?v=083befb59d725d2f471742830a9214121aee30ec497265b1d6a83f116fd2a184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
