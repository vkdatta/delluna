export const name="virtual-reality-thin";
export const id="dl_b08455a452ee46c293e7";
export const url=new URL("../icons/V/virtual-reality-thin.svg?v=b5234149a888ca418745845ada3f19043ac6552412d34c506498644fccece42a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
