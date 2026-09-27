export const name="note-pencil-light";
export const id="dl_c3db400753f14f86ae25";
export const url=new URL("../icons/note-pencil-light.svg?v=499dbdccae637f6a648ddd22e93eea467d809c431326d94be86df9adca89cc1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
