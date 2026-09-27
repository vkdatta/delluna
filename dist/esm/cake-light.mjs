export const name="cake-light";
export const id="dl_28991b29a9bf4a5a9ffe";
export const url=new URL("../icons/cake-light.svg?v=68aef2c6091f61c4725d643ec1a7a932b29965f487a8c88f78631716a39e21c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
