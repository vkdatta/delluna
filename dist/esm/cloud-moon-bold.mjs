export const name="cloud-moon-bold";
export const id="dl_1c027bf3331a4d40b95a";
export const url=new URL("../icons/cloud-moon-bold.svg?v=763c082734a3ce6b5b241e2e3452df9607675074378d2072f6f6731cd1a7057e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
