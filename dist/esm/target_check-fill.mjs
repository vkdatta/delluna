export const name="target_check-fill";
export const id="dl_b1f6524cf99950aba831";
export const url=new URL("../icons/target_check-fill.svg?v=633ad23561063448b85c10b400457a213b3a5b115d7269b4b7ad7aa6978a71ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
