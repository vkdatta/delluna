export const name="file-py-light";
export const id="dl_df5748f7f9aa43778737";
export const url=new URL("../icons/file-py-light.svg?v=f519a717fb3768d17704de6f6ecc71844faf9d017e0dcdc807e092aa90a113a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
