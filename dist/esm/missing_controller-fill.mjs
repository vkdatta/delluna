export const name="missing_controller-fill";
export const id="dl_a521eb9dab525a1aae0d";
export const url=new URL("../icons/missing_controller-fill.svg?v=bf9038f105f1672eb27ca8dc33cf3e6a28b3aedbe1946118cd9ac39162593d7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
