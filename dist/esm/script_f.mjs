export const name="script_f";
export const id="dl_55dfb92c0c434c699787";
export const url=new URL("../icons/script_f.svg?v=593fd4fabb2a3c369c4db66d36873f68820404a698cc3a6c21b885b8fbc3931e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
