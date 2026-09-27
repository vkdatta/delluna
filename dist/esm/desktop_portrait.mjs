export const name="desktop_portrait";
export const id="dl_a3ac435b948538161eed";
export const url=new URL("../icons/desktop_portrait.svg?v=6eb699089e9bace2ca63394a8bc555ee3e187203322f1991ce3459edbc979869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
