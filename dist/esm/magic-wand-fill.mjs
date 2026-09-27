export const name="magic-wand-fill";
export const id="dl_51be8b5696ed4cc98010";
export const url=new URL("../icons/magic-wand-fill.svg?v=25e113296ead41f87d9a7f4cf1089267d1af200d877da3568de14975a04db042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
