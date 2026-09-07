export const name="lucid_2-fold-vertical";
export const id="dl_27c4017335a2481ba179";
export const url=new URL("../icons/lucid_2-fold-vertical.svg?v=97108816b622a032829106bbe7e2b5a9d8f4f6cc24a98e93b7a28e941d106b7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
