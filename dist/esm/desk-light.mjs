export const name="desk-light";
export const id="dl_b8dc47a58fd143009196";
export const url=new URL("../icons/desk-light.svg?v=18b713bf2c77d0e6ef333964d598a28dc17151b3430996700bf6cc3c04d00611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
