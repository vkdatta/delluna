export const name="inbox_text_person";
export const id="dl_bf06e6650331da7bcf32";
export const url=new URL("../icons/inbox_text_person.svg?v=a50cf9f8144fbdc51cffd710c2b369a4808d2ee17bde613aee8bb8905cf247ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
