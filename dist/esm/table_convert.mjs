export const name="table_convert";
export const id="dl_3b37faf29926942f6a4d";
export const url=new URL("../icons/table_convert.svg?v=24e1782a1641af6c74192d1506df013d6999d594e025fc391491dfcdcbf3c91c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
