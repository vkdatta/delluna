export const name="shirt-folded-duotone";
export const id="dl_994dd85ecfcb401282df";
export const url=new URL("../icons/S/shirt-folded-duotone.svg?v=d5846d5f5bdcd43a5a74a70dab5dee7f69c5659338ec7c6ff0ff73145ab05b52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
