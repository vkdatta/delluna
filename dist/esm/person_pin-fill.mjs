export const name="person_pin-fill";
export const id="dl_07a82492849201fc81fb";
export const url=new URL("../icons/person_pin-fill.svg?v=8600ec47231a0ce853c41993fc72457c3a717779c75b643c852ea0bd79c4cba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
