export const name="lucid_1-clock-12";
export const id="dl_259ef765944146eba3a8";
export const url=new URL("../icons/lucid_1-clock-12.svg?v=f1e3fdccb45d076ec821cb76916117f8e3d41eb13195f7d093a8993c26c1892f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
