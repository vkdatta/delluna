export const name="lucid_2-eye-dashed";
export const id="dl_d92020db37c844a285a5";
export const url=new URL("../icons/lucid_2-eye-dashed.svg?v=2637f8ea5acb66c52a9afabd837e3442aa58b20251221bc1ebc9b098957c7b06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
