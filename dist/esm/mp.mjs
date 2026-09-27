export const name="mp";
export const id="dl_fc42cf29d8001e01ca3f";
export const url=new URL("../icons/mp.svg?v=f40d333c5ee9238b23e7b7e62ce75a108a1574fc1040569d3032b6ab51202593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
