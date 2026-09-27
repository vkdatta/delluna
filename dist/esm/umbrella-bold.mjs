export const name="umbrella-bold";
export const id="dl_faea8f737bd6a04fd72a";
export const url=new URL("../icons/umbrella-bold.svg?v=2b33462f3f665b9814b2730684b4987fa2e9d81e3f44131f6a2249a0cb61c351",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
