export const name="ods";
export const id="dl_78f3b7cb124b634788b3";
export const url=new URL("../icons/ods.svg?v=87c31a586cd21852619519a6fdb2cbfad4a0c3aaeda4592a4d9d514df2242702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
