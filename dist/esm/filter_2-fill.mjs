export const name="filter_2-fill";
export const id="dl_898da3fdeee70bd4faab";
export const url=new URL("../icons/filter_2-fill.svg?v=bda5452c9548d5fd640344617cedf989ef990fe55a4863a94094d508cf34565f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
