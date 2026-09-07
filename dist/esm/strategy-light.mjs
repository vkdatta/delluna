export const name="strategy-light";
export const id="dl_405c0d731db14c358359";
export const url=new URL("../icons/S/strategy-light.svg?v=389d557ee351d013797ec94109f6beb029b6e8b7bc9d772851761acb0e409344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
