export const name="onigiri";
export const id="dl_8601162bfd0c40c18bbe";
export const url=new URL("../icons/onigiri.svg?v=635893e6fe88785dfed57431c83c08ea65c968098d9fab49c5edc91910e547db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
