export const name="dropdown";
export const id="dl_78214662c27a7bba944f";
export const url=new URL("../icons/dropdown.svg?v=8d6fd13c459da66266c6769f761f667897a36f9be626dc2b768d4ef2452ea07d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
