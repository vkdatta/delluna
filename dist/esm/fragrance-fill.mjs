export const name="fragrance-fill";
export const id="dl_1938da5d07d142be2402";
export const url=new URL("../icons/fragrance-fill.svg?v=f0e11cfe8687c918649cd5f50da84f21a5a6d496dca6da7b46ad3d15b8ba3905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
