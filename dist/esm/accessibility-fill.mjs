export const name="accessibility-fill";
export const id="dl_538933b0c4fc459b8769";
export const url=new URL("../icons/accessibility-fill.svg?v=8017a259d0a08b81740424742f71032b6fb63707aa92f8dc046155580ecabf3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
