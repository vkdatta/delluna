export const name="error_med";
export const id="dl_56ea5862928b4e3aa2af";
export const url=new URL("../icons/error_med.svg?v=770494848beada0ce78b3af36d01d6297e8951c451427aa69b02c60364a491c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
