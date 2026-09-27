export const name="note-pencil-bold";
export const id="dl_61f84f7779214c02947b";
export const url=new URL("../icons/note-pencil-bold.svg?v=0442df79addeb1ee0971ec693b7b915e7d1c01378f6dcdeec27e125ca44b3c2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
