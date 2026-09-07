export const name="utensils";
export const id="dl_6f26f1443cf24a509ac2";
export const url=new URL("../icons/utensils.svg?v=58ac47dfcdb4f9cf8716ebb4f1ba3c49d8ca3325513c0f384d0a7faa78469b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
