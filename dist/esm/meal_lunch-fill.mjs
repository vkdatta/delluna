export const name="meal_lunch-fill";
export const id="dl_72572ffbd8f848a04f52";
export const url=new URL("../icons/meal_lunch-fill.svg?v=a28f6917b28ac820583ae67b23012e1c9990ce9af9e4690670408f21f110d8ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
