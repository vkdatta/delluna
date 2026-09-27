export const name="magnifying-glass-light";
export const id="dl_3562f3bbbc054c83af54";
export const url=new URL("../icons/magnifying-glass-light.svg?v=efed839466d11aab9dc346b2ddf72a9984e405a997ba4d581df1133252a3e7c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
