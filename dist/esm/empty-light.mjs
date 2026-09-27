export const name="empty-light";
export const id="dl_ff445b393fec423fbd99";
export const url=new URL("../icons/empty-light.svg?v=5bee1b4a0133501b419dc599418ff675fc450491c83c7c31dadd3169a9c047a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
