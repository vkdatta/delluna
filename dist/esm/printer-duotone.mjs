export const name="printer-duotone";
export const id="dl_3bed07147cca4c6b9d14";
export const url=new URL("../icons/printer-duotone.svg?v=0db8f4860c37a3a9e94b9bee6c0494abf2e6dfad0c6cc0a9e1301d02f2f0e437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
