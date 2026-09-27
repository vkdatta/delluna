export const name="briefcase_meal-fill";
export const id="dl_1beb16a2aa8a95fc9cc0";
export const url=new URL("../icons/briefcase_meal-fill.svg?v=f5ae0b7aca9284f539a17e6c260fbbc2d7600849c6125f4afad8e5208219203c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
