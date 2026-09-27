export const name="outpatient_med-fill";
export const id="dl_fff499f2ddccc2b775ae";
export const url=new URL("../icons/outpatient_med-fill.svg?v=810752efcfa8033d044c6a2bb76f8fde6dedf6b89ed46512301064b74fa2bb5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
