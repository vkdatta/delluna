export const name="detector_battery";
export const id="dl_bc47000ba8c24e639d92";
export const url=new URL("../icons/detector_battery.svg?v=e88bf82d93c9381a932940c663f35d9a8d0ce80c3c69c47bff7affb5418cfd89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
