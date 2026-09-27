export const name="apps-fill";
export const id="dl_fa78dac370f18a3f004d";
export const url=new URL("../icons/apps-fill.svg?v=306df65bd0ce564fcbd161acd2bbc53432082d17384c6a86b53ddecf99fb6b57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
