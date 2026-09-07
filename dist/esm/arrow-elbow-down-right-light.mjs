export const name="arrow-elbow-down-right-light";
export const id="dl_f62840b01d2f4678b438";
export const url=new URL("../icons/arrow-elbow-down-right-light.svg?v=62d8d7adbdc388f44a2977bd6ba20783c2fc677b103e42fedb4dede54fa44c04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
