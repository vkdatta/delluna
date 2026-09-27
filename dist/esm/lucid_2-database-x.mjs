export const name="lucid_2-database-x";
export const id="dl_f254f91388fd40718a32";
export const url=new URL("../icons/lucid_2-database-x.svg?v=ef7e1b3791e907cc389e2f280d7987bcd32ccb56b24a33d21922068ebb3fa479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
