export const name="fiber_new-fill";
export const id="dl_78bcd5f21f1245908f92";
export const url=new URL("../icons/F/fiber_new-fill.svg?v=3c5469cf99e340c72207d15b649c4708cb125427c7f7508587ced85f81cd6185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
