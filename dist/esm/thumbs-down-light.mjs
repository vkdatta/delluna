export const name="thumbs-down-light";
export const id="dl_75e1c0b1d721db033cb4";
export const url=new URL("../icons/thumbs-down-light.svg?v=fd10cee659417d1ab7b5868f884c26b5c51ea123f0b1f2bd8420e27c1dba104e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
