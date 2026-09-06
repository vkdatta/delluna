export const name="lucid_2-list-ordered";
export const id="dl_a50e8ee24484481880cc";
export const url=new URL("../icons/lucid_2-list-ordered.svg?v=af494aa77a02b76231d8ffdb220365efdc7f7a0d5ab318f32e64c227cd5c9019",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
