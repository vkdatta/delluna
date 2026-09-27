export const name="toys";
export const id="dl_b5e8a416d035e979c841";
export const url=new URL("../icons/toys.svg?v=fcda6edd7cbaac4ca4e49cfce3d387c42e061163acc2fa75a20ad9a7915dd3be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
