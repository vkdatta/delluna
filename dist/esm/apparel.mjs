export const name="apparel";
export const id="dl_a6bba9b8eede460bac42";
export const url=new URL("../icons/A/apparel.svg?v=7e82960b9dcbc6047f71d337b9f8737fa5aaf622fbe0c6489f2fe9d4560a733c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
