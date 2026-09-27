export const name="note-thin";
export const id="dl_aff2051b326845d989e2";
export const url=new URL("../icons/note-thin.svg?v=d479eb962268a06f4c964d4a7b008d42fa9c8b725a04895b5c11a5765638e610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
