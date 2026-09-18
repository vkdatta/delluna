export const name="dropdown";
export const id="dl_d1003f6fe1b74acca329";
export const url=new URL("../icons/dropdown.svg?v=9f676843cfda53af47b1e30ba31937dbb98634558aa195242a866b1eb2983b00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
