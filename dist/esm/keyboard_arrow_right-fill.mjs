export const name="keyboard_arrow_right-fill";
export const id="dl_499c5472b711c9d94d25";
export const url=new URL("../icons/keyboard_arrow_right-fill.svg?v=2a0a205016fce7f4e90097778afd6c2ff93c12c25f3d0393b3cc270454d063f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
