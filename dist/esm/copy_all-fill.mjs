export const name="copy_all-fill";
export const id="dl_0e7e393fd2affb95df5a";
export const url=new URL("../icons/copy_all-fill.svg?v=adfe78bc5b4d190752589d764a3a610fadb90493f7ce2771c9a3765c975af418",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
