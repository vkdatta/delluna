export const name="pulmonology-fill";
export const id="dl_efe623eccabb96836dd9";
export const url=new URL("../icons/pulmonology-fill.svg?v=8aa8f3959d07a67c5a3f69673d6c801e87d936af2d84bd8a10f0bdbc25f80183",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
