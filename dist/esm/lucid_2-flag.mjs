export const name="lucid_2-flag";
export const id="dl_57c1048d32a44e41932d";
export const url=new URL("../icons/lucid_2-flag.svg?v=40919a0c1ca705f1ef50b40efecc7b8bbb837314314cb9c1dcea396ea3cdc2b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
