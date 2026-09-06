export const name="lucid_1-book-lock";
export const id="dl_1c67058694f84848a9e9";
export const url=new URL("../icons/lucid_1-book-lock.svg?v=e42146d4aa360b70bdd3387711bead12d7977e8718c52a4281ce98b6a6bae88a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
