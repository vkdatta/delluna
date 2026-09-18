export const name="man_4-fill";
export const id="dl_aeabd28cc01946e9b003";
export const url=new URL("../icons/M/man_4-fill.svg?v=ba74c5cf968b449608812080edf0ee7993c10dcac12a9405a875cae11357192e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
