export const name="lucid_1-chevron-right";
export const id="dl_9f04f58bc8334bcdb5ac";
export const url=new URL("../icons/lucid_1-chevron-right.svg?v=bcadb42ba23634b25144b7ef8af3f28263e7d5067c550df0808e697688a86297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
