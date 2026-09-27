export const name="transition_chop";
export const id="dl_7cde9af859c82a69fdc7";
export const url=new URL("../icons/transition_chop.svg?v=793a4cfd98387455f849403096e1ea52923e610dd636a0550f44ef5767c05f95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
