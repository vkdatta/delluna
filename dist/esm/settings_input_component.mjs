export const name="settings_input_component";
export const id="dl_ea3d0997a1bee12bd5b8";
export const url=new URL("../icons/settings_input_component.svg?v=adad7f2218e0dd072a981883020681f1851247e9bacf0ed7a3174e78cf7ee65f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
