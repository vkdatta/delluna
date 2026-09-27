export const name="person_off";
export const id="dl_5c49e874626660e1ab32";
export const url=new URL("../icons/person_off.svg?v=9f8adf90f58cf4fd20dd9bda61561b6225c65e2254fd48c4b133c021d44290af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
