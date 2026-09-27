export const name="crop_3_2";
export const id="dl_038f26b0cf634ad09207";
export const url=new URL("../icons/crop_3_2.svg?v=e1fce85fca55c81371d5e42790220e1885a1fce451e7c216f5f7d111797aae7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
