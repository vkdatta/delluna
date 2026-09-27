export const name="thermometer-cold-duotone";
export const id="dl_feb519ec3d18f4bd420c";
export const url=new URL("../icons/thermometer-cold-duotone.svg?v=d5aa9373a89aa6fd508e00433bad4ae51c9fc2313f699fd3bd1176cffeb89fb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
