export const name="speech_to_text-fill";
export const id="dl_87d864fb2dac69808ab7";
export const url=new URL("../icons/speech_to_text-fill.svg?v=6874233dd67de0211cd78ee5f13da2473dcd8b18ea320716bf4550210afbe2c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
