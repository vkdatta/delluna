export const name="lucid_2-list";
export const id="dl_f492596abb5b45e79e87";
export const url=new URL("../icons/lucid_2-list.svg?v=8fdd7410f5abd72264c2dd688008d9371eaa2befa35e9a6be76040ea9116bafe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
