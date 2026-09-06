export const name="person-simple-walk-bold";
export const id="dl_48003e3c17034db99cde";
export const url=new URL("../icons/person-simple-walk-bold.svg?v=84f1e84d66143e1d6aeadda64afbf0b673f7e1adefc8612421c30d4416d18416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
