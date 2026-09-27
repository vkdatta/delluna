export const name="pencil-simple-light";
export const id="dl_dcd5044f8c3a4f42a1f9";
export const url=new URL("../icons/pencil-simple-light.svg?v=d157d5f3601789de756bdaea59598e8a722697660d8007cf39bc7f9b9657be23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
