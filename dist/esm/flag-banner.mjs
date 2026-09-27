export const name="flag-banner";
export const id="dl_ed328b95e22c4cc1b59b";
export const url=new URL("../icons/flag-banner.svg?v=9ab26171cb37774c4066f3ed68010cb3897c5809ebbca5e713f3dd1c23212a7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
