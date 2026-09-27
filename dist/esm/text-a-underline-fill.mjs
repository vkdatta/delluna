export const name="text-a-underline-fill";
export const id="dl_5d5409639e1d6cf2699f";
export const url=new URL("../icons/text-a-underline-fill.svg?v=17c63ea2360fc201ff60ec054a4d221cdd9c66e632473aeb2b8ffc03c4031892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
