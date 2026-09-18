export const name="air_freshener-fill";
export const id="dl_347ead006ce54af8ba5e";
export const url=new URL("../icons/air_freshener-fill.svg?v=cc4f7ffa01cfff271f0561fee82914c6ace807850e0e75c355982c5343ce7e7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
