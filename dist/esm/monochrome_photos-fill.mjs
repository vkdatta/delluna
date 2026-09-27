export const name="monochrome_photos-fill";
export const id="dl_db24e0fc43854c3e6059";
export const url=new URL("../icons/monochrome_photos-fill.svg?v=b9a34f547f63e5cce90b4fa05b18ee0f226efa2fafa47f791eaba82bb311a2bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
