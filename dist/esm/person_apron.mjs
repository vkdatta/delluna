export const name="person_apron";
export const id="dl_588feb1b026991303d04";
export const url=new URL("../icons/person_apron.svg?v=759d665780329d9f0a0298ebd0673c6f3f1cacaee12ecadb8201e922a12d8e2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
