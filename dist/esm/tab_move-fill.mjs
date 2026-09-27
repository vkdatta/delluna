export const name="tab_move-fill";
export const id="dl_2dcfe4f9cd22e4de2ab5";
export const url=new URL("../icons/tab_move-fill.svg?v=e0b827f2fc649812e31ef51ed4f6b64dda84985038f0fdfa0af6a465e4b29b1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
