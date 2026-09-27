export const name="lucid_1-a-arrow-up";
export const id="dl_6fb48c67f61745958978";
export const url=new URL("../icons/lucid_1-a-arrow-up.svg?v=033b8442398590f618ba63898a2f44558780d6b0d30be373d5ab58b152151efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
