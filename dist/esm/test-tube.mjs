export const name="test-tube";
export const id="dl_36cd5ca1a6b53b75b671";
export const url=new URL("../icons/test-tube.svg?v=eedae4c3c685f5f8a74c2172075ea43b61061eb58daefe126b292cb6bc8072ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
