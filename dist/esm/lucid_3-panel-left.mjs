export const name="lucid_3-panel-left";
export const id="dl_f3d92b2e446a4ea48206";
export const url=new URL("../icons/lucid_3-panel-left.svg?v=72946b60447d197f6b833c19fd437ce62adb724923602aeb89f29314cc7d93ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
