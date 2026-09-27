export const name="move_to_inbox";
export const id="dl_3044594196778959a7f2";
export const url=new URL("../icons/move_to_inbox.svg?v=ae2cb44d67a2cb248348105870e92a8827dc5bd4e56c4196cf6074a1b2036b42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
