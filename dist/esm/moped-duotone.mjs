export const name="moped-duotone";
export const id="dl_9218567d66c04b54be62";
export const url=new URL("../icons/moped-duotone.svg?v=21ccaca57c75a2bddea572b10a8ddf0da2dd49b2ac2e733348cfe7c0d2fcbd21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
