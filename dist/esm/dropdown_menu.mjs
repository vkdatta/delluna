export const name="dropdown_menu";
export const id="dl_95ef969b59aaa150bc87";
export const url=new URL("../icons/dropdown_menu.svg?v=f2d81653ec4afd02aa9dc48d7eea09f5095b02384af6c335e6c157118cbacd85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
