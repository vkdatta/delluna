export const name="note";
export const id="dl_4b969c18d645461eaa10";
export const url=new URL("../icons/note.svg?v=8dad2e545c79b0d8eb121a80296053238691af688afae4d1d7629e6c300f3904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
