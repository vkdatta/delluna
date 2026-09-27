export const name="restore_from_trash";
export const id="dl_8675140a387e022e9c94";
export const url=new URL("../icons/restore_from_trash.svg?v=7d971440d5b9e1ff0edc7d1ec60efeddb2a915ef734ab21ccf0bb545b0768603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
