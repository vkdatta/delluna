export const name="forms_add_on";
export const id="dl_79506fecd400f1369744";
export const url=new URL("../icons/forms_add_on.svg?v=dd7115afc59788b3529bfd599b4e851804102b6704be905d10fb9a41673e41cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
