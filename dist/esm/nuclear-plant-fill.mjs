export const name="nuclear-plant-fill";
export const id="dl_3d5e5609415c4da7b532";
export const url=new URL("../icons/nuclear-plant-fill.svg?v=f9e8d849971b6cfed69ba71ec9f742fdccbff91874726461b1cee325110d5919",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
