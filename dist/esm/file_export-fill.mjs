export const name="file_export-fill";
export const id="dl_13c3d04e520278b78c8f";
export const url=new URL("../icons/file_export-fill.svg?v=b95b7b9392178f4dbb9af64343c2b044defbdb7cdcd6fdc27ba686428d6069c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
