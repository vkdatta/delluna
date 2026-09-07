export const name="spade-duotone";
export const id="dl_03384b9b7d0a468a9544";
export const url=new URL("../icons/S/spade-duotone.svg?v=0e8099db8b308fdddcbe34df37fa1d2c664be1040db5e0f4f2f018fb7684c4f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
