export const name="chair_alt-fill";
export const id="dl_772721d85ff07335ba11";
export const url=new URL("../icons/chair_alt-fill.svg?v=751fc1e8c1e2972dff665f11a08fc7672ae5b4ef263911c9817b50b2784c143f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
