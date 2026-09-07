export const name="circles-three-plus-fill";
export const id="dl_aea51acd77dc43e782e5";
export const url=new URL("../icons/circles-three-plus-fill.svg?v=a9909aaa0b40e2b63b45a022ecb0576d560aebfc13a55da9b361e60c64c26882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
