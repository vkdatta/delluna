export const name="inbox_text_person-fill";
export const id="dl_f5cfb7c19d4811b747fd";
export const url=new URL("../icons/inbox_text_person-fill.svg?v=feeeadd4e69304b7057cd199b2b9c1aa42e9bc2555578596726a0a54114aafbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
