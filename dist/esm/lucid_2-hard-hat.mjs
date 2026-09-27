export const name="lucid_2-hard-hat";
export const id="dl_65fb64b3eb7e4f728857";
export const url=new URL("../icons/lucid_2-hard-hat.svg?v=1051a8f58a6aa43b309a01ea4e858fb78bacba8d71afaa487dff1f28a8f00724",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
