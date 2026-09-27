export const name="format_letter_spacing_2";
export const id="dl_8b8a3b44e63d07d47cfd";
export const url=new URL("../icons/format_letter_spacing_2.svg?v=d36316a3f69778b33a60631bbb9122980ed8175a9ed65a825df6ff49545652dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
