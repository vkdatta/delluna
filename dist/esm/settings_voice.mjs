export const name="settings_voice";
export const id="dl_224a12d14df54ba58eda";
export const url=new URL("../icons/settings_voice.svg?v=abfc9719ae6e4fd15ff517061354fdccff86b57fdec6cb86691d0c73f0baa612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
