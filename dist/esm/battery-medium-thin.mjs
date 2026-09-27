export const name="battery-medium-thin";
export const id="dl_1218d3e80c0a4a5cb498";
export const url=new URL("../icons/battery-medium-thin.svg?v=f2b4fe23d3315683007daf42506d626043ddf29719c317576871ec7176c2b728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
