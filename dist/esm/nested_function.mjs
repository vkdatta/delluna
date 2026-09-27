export const name="nested_function";
export const id="dl_1a42c857f33b4b59ba87";
export const url=new URL("../icons/nested_function.svg?v=5d494434c7d4d86c422c3c41102bacce9f891142255d163e865d9baeea63f171",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
