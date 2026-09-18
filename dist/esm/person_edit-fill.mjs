export const name="person_edit-fill";
export const id="dl_87ad699f577e4aaa9efa";
export const url=new URL("../icons/P/person_edit-fill.svg?v=033eae41aa199153b87e811aeb6cf7162747561dbd4a49c1acc5ca10a2811bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
