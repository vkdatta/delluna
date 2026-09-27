export const name="visibility_off";
export const id="dl_b0afd0ca3e0f8548437d";
export const url=new URL("../icons/visibility_off.svg?v=85cad7e0b2e958d24c11fe5402cd4cb63969a6adf5c624969c9a48e7494ab3cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
