export const name="shirt-folded-duotone";
export const id="dl_b76f50d1d0a76ecf9c94";
export const url=new URL("../icons/shirt-folded-duotone.svg?v=e869950bb7637c2bf596af92156aaabad97d7033dd4cc396c194ef2b0186dfdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
