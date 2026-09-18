export const name="person_search";
export const id="dl_053966a62e7b4470994d";
export const url=new URL("../icons/person_search.svg?v=a6f59929c883cb525158ae2a1c42b200ff0107b989b07b7440f4e8523065caaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
