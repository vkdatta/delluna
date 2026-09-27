export const name="sports_tennis-fill";
export const id="dl_67bb4f824a34755ab3b3";
export const url=new URL("../icons/sports_tennis-fill.svg?v=f0dc2555988d76d930320ce020f76759c67a8635bf597a4407dc827f4e77f9a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
