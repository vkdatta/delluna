export const name="grid-four-fill";
export const id="dl_5643bb6b52fc4273afc9";
export const url=new URL("../icons/grid-four-fill.svg?v=5885030ff00fe7a58e750b3ec857aa86c77731e1d6efbac2e0ef893aded43b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
