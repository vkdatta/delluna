export const name="tray-bold";
export const id="dl_3da5b8c23f3ea45613ff";
export const url=new URL("../icons/tray-bold.svg?v=dc7a401e258ee41f7d31eafe6c8c063452f35747960ac117851870fc73fe0299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
