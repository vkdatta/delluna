export const name="library_add_check";
export const id="dl_7980c0a3188d168592ca";
export const url=new URL("../icons/library_add_check.svg?v=e5f6202cbf457f4108eed135b96b3c9b6478289c1d4d88d875c4a0441253e581",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
