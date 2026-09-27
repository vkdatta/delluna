export const name="switch_access-fill";
export const id="dl_0bc11509016098a5604e";
export const url=new URL("../icons/switch_access-fill.svg?v=99aebe9bda6b728a5b712e753de1cff9b405525ba1845280360501cc272b0826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
