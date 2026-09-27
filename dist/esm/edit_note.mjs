export const name="edit_note";
export const id="dl_66bbbdf79ff47ed1de9f";
export const url=new URL("../icons/edit_note.svg?v=b0830f5e91630043be00b376419f758ecc64bb0a0e9e504eba8867684ff9201e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
