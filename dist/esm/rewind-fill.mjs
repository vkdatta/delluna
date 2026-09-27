export const name="rewind-fill";
export const id="dl_226d4f93114c45dbaf1d";
export const url=new URL("../icons/rewind-fill.svg?v=ab5874066fe4b58c324e60cca3c108a86ab1f213cb32bdae9c0f2c60015127eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
