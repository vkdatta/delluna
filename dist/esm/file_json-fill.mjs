export const name="file_json-fill";
export const id="dl_78edbab6a0eb185ba680";
export const url=new URL("../icons/file_json-fill.svg?v=124e864dcd8891271b3e78f09a25f418b3634bfd5885febba937add8ed7c4cb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
