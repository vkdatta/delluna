export const name="lucid_3-square-dashed-kanban";
export const id="dl_4d269de690e045368dfd";
export const url=new URL("../icons/lucid_3-square-dashed-kanban.svg?v=b50b40bd5a94f94b72527c5b4b2d9b82957a44d861e917892a2be061f1309bd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
