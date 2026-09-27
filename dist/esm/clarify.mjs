export const name="clarify";
export const id="dl_f8fa09039e60cc43dc6e";
export const url=new URL("../icons/clarify.svg?v=179637253a6e056f5cd89407d924915df825cbf98095a0d31ea9d7a4ec6ac549",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
