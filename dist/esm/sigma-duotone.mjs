export const name="sigma-duotone";
export const id="dl_0328532887de032978d7";
export const url=new URL("../icons/sigma-duotone.svg?v=98b97791416d965ddc5a7c343c6fdf8f4737a6e5d6e720eb12b0140841262870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
