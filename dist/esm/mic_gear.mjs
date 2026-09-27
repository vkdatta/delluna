export const name="mic_gear";
export const id="dl_f9ca10e560fe2eaa8a1d";
export const url=new URL("../icons/mic_gear.svg?v=d40e9164d1fb430222c505780249d2f9702bb537fa1a436a5799ad5c5c44cf5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
