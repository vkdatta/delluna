export const name="file-ppt-light";
export const id="dl_fc69572bac5d4ea997d8";
export const url=new URL("../icons/file-ppt-light.svg?v=0f203be447c93aa58605f4421545de2c9227b76b8987a2d18f364b14fa86c02b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
