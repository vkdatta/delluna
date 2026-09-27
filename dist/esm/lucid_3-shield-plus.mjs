export const name="lucid_3-shield-plus";
export const id="dl_51205f51211b47caae4b";
export const url=new URL("../icons/lucid_3-shield-plus.svg?v=27c0852f49527579dd26f2ecbb8ece76f3ca0289ab11b266c7875b4a21556893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
