export const name="extension";
export const id="dl_a727078b819fa79f7c99";
export const url=new URL("../icons/extension.svg?v=66d3aba498a59fd3ee68f6fab16c350cd0ec15f0fddc0541830033997f5aa950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
