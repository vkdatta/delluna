export const name="folder_check";
export const id="dl_321ffad7bf6bb81003f9";
export const url=new URL("../icons/folder_check.svg?v=69a8999ca91ef2f1816507f64b2d8f4ab3a27ff0a4f4710cb5e356ce44757276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
