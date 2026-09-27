export const name="lucid_2-folder-pen";
export const id="dl_40efd0df2ecb40969074";
export const url=new URL("../icons/lucid_2-folder-pen.svg?v=121d0f4b7c87461e7441aee98f6c490b0c391c75f1d6d64277d22e47db5c1664",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
