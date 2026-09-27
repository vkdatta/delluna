export const name="group_search";
export const id="dl_a9938b16b6de26197d14";
export const url=new URL("../icons/group_search.svg?v=4114c16bc4d1a166a23b4efba3f9ee8c831043bbc7a461a3a19b6ed908cfdfe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
