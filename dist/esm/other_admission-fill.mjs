export const name="other_admission-fill";
export const id="dl_131546b65dcba89fd6b5";
export const url=new URL("../icons/other_admission-fill.svg?v=d0455b9dcddc74665f980d48d174404e3bd2179d383ba9d4dc4805a9fa448b98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
