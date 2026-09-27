export const name="person_4-fill";
export const id="dl_343b775a422751e1bd3b";
export const url=new URL("../icons/person_4-fill.svg?v=0d04c4971dd4c293f9d8106eb39eec976add5da31fdcfca9775fe3a01e0361af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
