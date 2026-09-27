export const name="database_upload-fill";
export const id="dl_c0fedf24040370114da2";
export const url=new URL("../icons/database_upload-fill.svg?v=498d3fac271bb42621e82a6d69eca2a23b4833179bdc09b6f183b1ad0fa1815b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
