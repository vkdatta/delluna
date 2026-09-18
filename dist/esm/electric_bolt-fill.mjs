export const name="electric_bolt-fill";
export const id="dl_8384922cef514cdd998a";
export const url=new URL("../icons/electric_bolt-fill.svg?v=e226ea9edce80e489e4c982ca622f34c4c760a99197266ae2333fe189c7fe556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
