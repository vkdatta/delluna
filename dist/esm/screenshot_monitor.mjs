export const name="screenshot_monitor";
export const id="dl_2f135aafa5c46018ca36";
export const url=new URL("../icons/screenshot_monitor.svg?v=5fe2aee1796988d304336979844d2406667134dea0350ec91b118c4ad040395d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
