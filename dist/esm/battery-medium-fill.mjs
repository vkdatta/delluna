export const name="battery-medium-fill";
export const id="dl_10a9c8e2a2cc409fb401";
export const url=new URL("../icons/battery-medium-fill.svg?v=5596cd386163946454e31119bb21861c5e72d757b7e95b78dd796570431245c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
