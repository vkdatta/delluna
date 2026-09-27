export const name="restore_from_trash-fill";
export const id="dl_f758d1c45a5b8e6c1cc9";
export const url=new URL("../icons/restore_from_trash-fill.svg?v=de091c87340a476ee07bc541524ed29bc669e39981487e83e37b8dafbec0bd5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
