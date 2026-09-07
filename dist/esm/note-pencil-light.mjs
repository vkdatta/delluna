export const name="note-pencil-light";
export const id="dl_c3db400753f14f86ae25";
export const url=new URL("../icons/note-pencil-light.svg?v=6468eaab944d70e2457031d16f1e56c201f98ac1bef1019326e6a23caa1187d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
