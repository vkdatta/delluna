export const name="apps-fill";
export const id="dl_4c62e52bb9544e0fbb1e";
export const url=new URL("../icons/A/apps-fill.svg?v=3346a0bb6596c1141bc1b16cc4f21913c45c06eb2b12ec906133ba044b669a8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
