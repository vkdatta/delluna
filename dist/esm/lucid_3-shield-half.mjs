export const name="lucid_3-shield-half";
export const id="dl_0272d290ea414b918489";
export const url=new URL("../icons/lucid_3-shield-half.svg?v=be32b36cc3e5e17ed6bec022739643a09dd3ea08e96eee6267af974dd59eea04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
