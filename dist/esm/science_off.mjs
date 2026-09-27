export const name="science_off";
export const id="dl_b52942b33a75deec4b72";
export const url=new URL("../icons/science_off.svg?v=fa08e20e9499a8c4fc77ac609f68821688f74582a34c3f93c31f740df10c092a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
