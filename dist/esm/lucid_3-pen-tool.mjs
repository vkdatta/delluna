export const name="lucid_3-pen-tool";
export const id="dl_4dbbb0fc445342088016";
export const url=new URL("../icons/lucid_3-pen-tool.svg?v=3cf6a65bb5cd003a97a3bccd1b323d4e74f2f4da7d61c73f503c479c45bdadd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
