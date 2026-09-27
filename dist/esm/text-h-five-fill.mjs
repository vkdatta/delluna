export const name="text-h-five-fill";
export const id="dl_f744bcf1daa0df65d4c7";
export const url=new URL("../icons/text-h-five-fill.svg?v=e551e0361335de1f5f7fbaa1c1ce7bf24aad61e864aa79306eaf1c2f900a3e11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
