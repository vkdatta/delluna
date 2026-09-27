export const name="eye-thin";
export const id="dl_8e06c018985a4e29a34d";
export const url=new URL("../icons/eye-thin.svg?v=b4cbbcce7c2613468e14d1822d4ea03ce3516572ea3b692d1c9fa10b331fd047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
