export const name="lucid_1-bed-double";
export const id="dl_a8301bda9b0647f39534";
export const url=new URL("../icons/lucid_1-bed-double.svg?v=10aae12d99b34c499f4daffc240a3613030b3e6a75d6d1f2cd8369a44cf5f969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
