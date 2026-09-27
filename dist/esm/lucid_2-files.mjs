export const name="lucid_2-files";
export const id="dl_0c796e09992241f1b579";
export const url=new URL("../icons/lucid_2-files.svg?v=a5b6d6b695a82012b431cf570dc480759b90708859834135cb577a0df6f32f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
