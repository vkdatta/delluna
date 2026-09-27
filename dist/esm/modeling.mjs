export const name="modeling";
export const id="dl_9dd211b9af0f62053ed0";
export const url=new URL("../icons/modeling.svg?v=5331b915c9049a4865c0940479d9919b606f8008d85055e21bb566a9818950f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
