export const name="universal_currency_alt-fill";
export const id="dl_89dce57a46ad633fe329";
export const url=new URL("../icons/universal_currency_alt-fill.svg?v=56a0dcdfe15270886676fd1549d010a2e18fd48f2b5d7d890831184b02ddd250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
