export const name="nest_display_max-fill";
export const id="dl_bed98ed39757dd1ae760";
export const url=new URL("../icons/nest_display_max-fill.svg?v=2cfc136f60777eede8f947a7051cd7ea7d8ec3437467ec1aeb16b6829ebc1826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
