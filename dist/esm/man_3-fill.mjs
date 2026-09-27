export const name="man_3-fill";
export const id="dl_a85a02c139757ec50140";
export const url=new URL("../icons/man_3-fill.svg?v=6ad17fa63b17cac5bb0e86e909631aceaab82558007e811ce8adba324fee4eec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
