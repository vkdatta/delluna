export const name="globe-hemisphere-west-fill";
export const id="dl_57f8da70916b42e68446";
export const url=new URL("../icons/globe-hemisphere-west-fill.svg?v=ea3bc8e9cb32d330074de373a73e5b95dfca38ae46f601768e82246c01bd9e9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
