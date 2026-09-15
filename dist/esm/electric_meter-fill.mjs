export const name="electric_meter-fill";
export const id="dl_ea3c96a4829c4534a01b";
export const url=new URL("../icons/E/electric_meter-fill.svg?v=c7f8c862e724efa00beaeead51e0eb98a4ca8dc761b1aa608a40844d7fbb5c56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
