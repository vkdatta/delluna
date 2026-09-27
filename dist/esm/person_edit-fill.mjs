export const name="person_edit-fill";
export const id="dl_87e97e7dfc29bc9d241a";
export const url=new URL("../icons/person_edit-fill.svg?v=79002012dbc14e0822ef850d595aadc1a6347de790ea67e042d8d782d8cca287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
