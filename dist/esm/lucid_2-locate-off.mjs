export const name="lucid_2-locate-off";
export const id="dl_d6849015aa6b4a01893f";
export const url=new URL("../icons/lucid_2-locate-off.svg?v=189e027d26dc3e7a522471a389af280f1e0f17b9c1d5805f3cf33b8959aa8cd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
