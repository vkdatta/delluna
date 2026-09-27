export const name="drive_export-fill";
export const id="dl_10c65248fa8a77b29665";
export const url=new URL("../icons/drive_export-fill.svg?v=4f9ce374b4320a5f8e3e4292e928cbe328f97bbfe3a4dfc1ce814f802f58e72d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
