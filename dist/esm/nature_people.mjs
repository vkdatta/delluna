export const name="nature_people";
export const id="dl_a2370a086d325f8de56a";
export const url=new URL("../icons/nature_people.svg?v=97e8a621af21b032ee6667ddc122089421cd5c5a3a4c50494c4469f98d20bcfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
