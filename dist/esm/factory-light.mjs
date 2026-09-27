export const name="factory-light";
export const id="dl_8d847f627bd141abac4c";
export const url=new URL("../icons/factory-light.svg?v=03fad9e328db9c98aeb8e6988b6bca5f8061a22118bce8d9e556255ffb5b50ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
