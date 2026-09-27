export const name="lucid_3-message-circle-dashed";
export const id="dl_b1f3534bddc242a8a7b3";
export const url=new URL("../icons/lucid_3-message-circle-dashed.svg?v=f43ea799a46d548d35155a06b9113e90beff30a14dc634f49c1f9627823ece14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
