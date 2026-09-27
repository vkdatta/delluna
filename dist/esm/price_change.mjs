export const name="price_change";
export const id="dl_aee6ff8010876a3c3c50";
export const url=new URL("../icons/price_change.svg?v=dce6518bc10556925fc448d68685bd5964b573757805c0592cf46f2e7660d431",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
