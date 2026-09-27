export const name="file-py-light";
export const id="dl_df5748f7f9aa43778737";
export const url=new URL("../icons/file-py-light.svg?v=4d220c0f7caff4b7eedb1999ff404599e69de49b6358f62888f183a3a5ae7ace",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
