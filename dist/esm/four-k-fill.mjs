export const name="four-k-fill";
export const id="dl_17477e6d9abd42f8b0e5";
export const url=new URL("../icons/four-k-fill.svg?v=237cd752296f3d03ccb85a3ea7a0ed52c9d75d752d81df5396dff596646fdb65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
