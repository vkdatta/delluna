export const name="inbox_text_person";
export const id="dl_b4067ffd86233c8d37c2";
export const url=new URL("../icons/inbox_text_person.svg?v=ba76c3407d5814d07f701877051376697172cd5b3064524d247b0a926e609ca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
