export const name="devices_wearables";
export const id="dl_dc77643b48f648918c4e";
export const url=new URL("../icons/D/devices_wearables.svg?v=45358fd58054c3536b46bc117b21c745dbdec142ed775e3416932d229e70cc64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
