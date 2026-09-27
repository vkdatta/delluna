export const name="push-pin";
export const id="dl_b16888fc9b18403584d7";
export const url=new URL("../icons/push-pin.svg?v=5c9e3a5abccd5dede2ebbe17167affb500b52e041b974999bab058c79e7f6a03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
