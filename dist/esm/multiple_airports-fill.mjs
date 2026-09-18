export const name="multiple_airports-fill";
export const id="dl_7c13bb909be140239899";
export const url=new URL("../icons/multiple_airports-fill.svg?v=a59369aff6682d06479af25d54618ab42ff8d02581c8f86446ca7fc4d75203a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
