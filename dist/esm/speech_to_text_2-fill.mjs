export const name="speech_to_text_2-fill";
export const id="dl_a2c6ee3241e7d322c858";
export const url=new URL("../icons/speech_to_text_2-fill.svg?v=550fa096d78a48634f9f58739dbc4c8c26097b0616a402f1a85fc2336d4f090a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
