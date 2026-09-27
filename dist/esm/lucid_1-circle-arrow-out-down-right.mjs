export const name="lucid_1-circle-arrow-out-down-right";
export const id="dl_2f01ba5af260463d892f";
export const url=new URL("../icons/lucid_1-circle-arrow-out-down-right.svg?v=9fec2af65c16b4ab9632bb19d2ceef0d1ce92aa9050cbaafeb6890bf5b42e75c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
