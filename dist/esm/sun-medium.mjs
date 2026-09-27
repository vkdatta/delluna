export const name="sun-medium";
export const id="dl_bf68266431584d4e88b2";
export const url=new URL("../icons/sun-medium.svg?v=660d412cc32322fe48b57ea3a503e4f9be3870133713af290846af0350bd6eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
