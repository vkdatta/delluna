export const name="hand_meal";
export const id="dl_c0ab8d5f74a2f4aafe91";
export const url=new URL("../icons/hand_meal.svg?v=115c85fd1cc443fd8e72fba30bc31515af95a04329667ef1199f8845bcdd6c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
