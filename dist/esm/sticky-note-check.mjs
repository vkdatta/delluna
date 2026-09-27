export const name="sticky-note-check";
export const id="dl_cad95a78ead4431ea7b6";
export const url=new URL("../icons/sticky-note-check.svg?v=76cc07eda0e75e404eb6eb7f100a3fe9b6fb99b5d314ef2082b10988745dcb20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
