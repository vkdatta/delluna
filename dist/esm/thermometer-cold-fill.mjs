export const name="thermometer-cold-fill";
export const id="dl_08221cdec2815ceb5214";
export const url=new URL("../icons/thermometer-cold-fill.svg?v=2a7fc2e05e7012ee90f17304116284afe7bdd81c622d4581ba8892f9b4ec35fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
