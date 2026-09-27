export const name="microsoft-outlook-logo-fill";
export const id="dl_54a537271af64549afd4";
export const url=new URL("../icons/microsoft-outlook-logo-fill.svg?v=f32507a954a5ae6b5571dbf63fccc49fbf06f107672f659cb52389f4a253182e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
