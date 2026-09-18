export const name="bedroom_baby-fill";
export const id="dl_88ed1dcdcb064502885b";
export const url=new URL("../icons/bedroom_baby-fill.svg?v=40dd8cda6978f93b8c44a675a9b63ff97b55686628ca6b0af72982f5e4281e7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
