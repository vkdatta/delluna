export const name="seal-check-thin";
export const id="dl_de746f76e885362c44c3";
export const url=new URL("../icons/seal-check-thin.svg?v=9ac7a82e437d4c3fea623cafb74d6df85d5f582b88a8f07e74190d6c2860f3d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
