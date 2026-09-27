export const name="brightness_4-fill";
export const id="dl_c723eb2a45ea4b347ed5";
export const url=new URL("../icons/brightness_4-fill.svg?v=3e5ea8bc5bf8dea3cc3dd5d2f3c1430b84d16bcb89fc40501635c7f260b82947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
