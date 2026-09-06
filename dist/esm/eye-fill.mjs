export const name="eye-fill";
export const id="dl_10ca408065a04ff3bd23";
export const url=new URL("../icons/eye-fill.svg?v=86381b51cb6f305019503b4c5d4b02fe8df5941bab3f1475ee873006a8708420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
