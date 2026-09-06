export const name="lucid_3-pencil-line";
export const id="dl_06b3aae398f14f9287ee";
export const url=new URL("../icons/lucid_3-pencil-line.svg?v=08e590c5f3e6071db4fd090afa9b724504f82cb83025c167c70749a129e5d1a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
