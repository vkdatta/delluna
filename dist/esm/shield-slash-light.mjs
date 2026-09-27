export const name="shield-slash-light";
export const id="dl_8baec19ab86852db83fb";
export const url=new URL("../icons/shield-slash-light.svg?v=46c645ca3a6a741cbdbb0b2fa5eac331d7190b1985b86f384115e61fcb08d913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
