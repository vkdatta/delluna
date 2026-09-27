export const name="lucid_3-shield-cog-corner";
export const id="dl_a18e676464e24cab8da6";
export const url=new URL("../icons/lucid_3-shield-cog-corner.svg?v=947481100da7528a6a9b185e651465e143ba5d03129995f31231a545241f99c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
