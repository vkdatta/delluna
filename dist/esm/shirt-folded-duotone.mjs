export const name="shirt-folded-duotone";
export const id="dl_a18087204698d81b7b18";
export const url=new URL("../icons/shirt-folded-duotone.svg?v=baa9027ef04e313de137a78d659a596f6df47c9f27085a51244f5ac88d644771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
