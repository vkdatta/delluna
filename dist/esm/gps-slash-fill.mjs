export const name="gps-slash-fill";
export const id="dl_3e94be810a974778be57";
export const url=new URL("../icons/gps-slash-fill.svg?v=572dea7e3fde20f9757e7f71bc3395cef60e0539d14b7ddd3841885333e177c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
