export const name="anchor-simple-fill";
export const id="dl_f86297f8e19f46ffb136";
export const url=new URL("../icons/anchor-simple-fill.svg?v=3cdb0d966bc10eddaff89e5bf076933511476cbfae5da93a20c42be3988fc859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
