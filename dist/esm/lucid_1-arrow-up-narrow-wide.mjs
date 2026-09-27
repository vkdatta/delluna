export const name="lucid_1-arrow-up-narrow-wide";
export const id="dl_b6adf2fa1b2e480aa29b";
export const url=new URL("../icons/lucid_1-arrow-up-narrow-wide.svg?v=b9f591a3da2483535a1f70f5a6b143893981befff93a347b1bad883ac921c493",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
