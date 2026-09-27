export const name="waypoints";
export const id="dl_eea846d488f3468f9765";
export const url=new URL("../icons/waypoints.svg?v=eae0d6dc83f7e4fd38c50262999e6daec61fdd191745a0368b8a2687d06ed639",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
