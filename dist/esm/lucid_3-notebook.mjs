export const name="lucid_3-notebook";
export const id="dl_93b708f769ca4fa0adac";
export const url=new URL("../icons/lucid_3-notebook.svg?v=fb25c70610a5505cef49396fac5bd24384e5ee4ae2b0fde42be73e47ee46e9fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
