export const name="outbox-fill";
export const id="dl_33b80dd1a33a2af367d6";
export const url=new URL("../icons/outbox-fill.svg?v=bdd10dd017d350f386f9a4d202fa33a555dd3e1499d9167d54af5914b5a47142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
