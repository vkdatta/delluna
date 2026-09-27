export const name="export_notes";
export const id="dl_316b8a0e533c09728948";
export const url=new URL("../icons/export_notes.svg?v=0e64564b4cd108930f88769f8dfef49ac8595a82ef790e07b9e51c2fc684c0eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
