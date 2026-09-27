export const name="editor_choice-fill";
export const id="dl_2f6be60b9180f54b4178";
export const url=new URL("../icons/editor_choice-fill.svg?v=2cb425c8c91f89b0f36561bdbcab290427ab32d94d748a0c5f8cd18e92baef2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
