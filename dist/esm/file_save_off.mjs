export const name="file_save_off";
export const id="dl_ffe42de748ad20326387";
export const url=new URL("../icons/file_save_off.svg?v=45da0ae249d917053f63003ed70759bbbec6300933f545623177744418b0a758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
