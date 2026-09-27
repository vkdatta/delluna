export const name="special_character-fill";
export const id="dl_959e77a8570233a447f0";
export const url=new URL("../icons/special_character-fill.svg?v=a561bff25a1baa08d9f1852ffa158c1256cb14b71d007aa380ad81368f946198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
