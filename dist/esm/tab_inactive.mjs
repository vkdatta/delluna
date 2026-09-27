export const name="tab_inactive";
export const id="dl_c57d391920c34240d422";
export const url=new URL("../icons/tab_inactive.svg?v=17a3ad408fc56446876f7f35c56eb8ae2f6145add88e3df59df68879c4c4e7bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
