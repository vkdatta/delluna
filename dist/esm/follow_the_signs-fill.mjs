export const name="follow_the_signs-fill";
export const id="dl_29a43d83622a471ea65a";
export const url=new URL("../icons/F/follow_the_signs-fill.svg?v=e74d40bfb2f0d5f89bec75ba6b6e79813f1e915a387327a413a9e53d0a3281bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
