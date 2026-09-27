export const name="vacuum_2";
export const id="dl_abad70090c1f863f13ed";
export const url=new URL("../icons/vacuum_2.svg?v=620bd55c652ca57296548328cd77b1c647207203bb1ddbba5619f6f2d2549058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
