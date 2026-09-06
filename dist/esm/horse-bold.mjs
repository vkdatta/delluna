export const name="horse-bold";
export const id="dl_4b0031e42f214eb9838b";
export const url=new URL("../icons/horse-bold.svg?v=deae85baca9f91a2dea496d33a3476471c7e21009159589f6e066c9ddf712dd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
