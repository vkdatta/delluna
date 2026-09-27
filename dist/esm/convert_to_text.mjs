export const name="convert_to_text";
export const id="dl_4fea76ba5cce072cd476";
export const url=new URL("../icons/convert_to_text.svg?v=f4c8a7c124ae1e6891a89c196678298e6df087fa14f994f4792592dc4f11ba3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
