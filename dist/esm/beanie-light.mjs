export const name="beanie-light";
export const id="dl_058bf0a8684a4ff39da1";
export const url=new URL("../icons/beanie-light.svg?v=2fcd99039ba7e02e7789f5f38a717523b8b6f98b7b409d396ced93c7d7d37094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
