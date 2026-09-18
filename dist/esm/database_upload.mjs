export const name="database_upload";
export const id="dl_85fc1d00b268482fa403";
export const url=new URL("../icons/database_upload.svg?v=279791aa5bc473cb2a07e79a514be4b8dfef99967801a9df0e908a99500b02a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
