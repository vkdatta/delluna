export const name="picture_as_pdf-fill";
export const id="dl_6788d8d113a3b4e3c342";
export const url=new URL("../icons/picture_as_pdf-fill.svg?v=53f827a345616e9e725e34fe5403fcbf0e8fa02aad0ef3369f3aa42e255c119e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
