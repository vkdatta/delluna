export const name="align_center-fill";
export const id="dl_8584d295c77b4549d53e";
export const url=new URL("../icons/align_center-fill.svg?v=f06f6fab82a5988260d02a06fee1da7c3ac87288cefa46c6fe83cac53d274194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
