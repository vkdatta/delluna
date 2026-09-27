export const name="lucid_2-file-headphone";
export const id="dl_3bf0f8cec5d2457fbbbc";
export const url=new URL("../icons/lucid_2-file-headphone.svg?v=f561af3f00650fa05e920f02b49af78115318857dbc5b6c216013c17fd19d35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
