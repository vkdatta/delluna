export const name="lucid_3-notepad-text-dashed";
export const id="dl_3c9f1f0cc50f466e9f1e";
export const url=new URL("../icons/lucid_3-notepad-text-dashed.svg?v=ff5c2f88969bc94e4f75dba597bf2889f8b5f8a2a518d955eb930c73e9f3bf95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
