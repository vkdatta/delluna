export const name="ev_station";
export const id="dl_bc48acf456f24f878d85";
export const url=new URL("../icons/ev_station.svg?v=320c2a297628666069350ba65de83526485cc1988fa950b244594fb21f0391e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
