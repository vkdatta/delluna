export const name="tsv-fill";
export const id="dl_24a29bc1b6d4070fa676";
export const url=new URL("../icons/tsv-fill.svg?v=5ba4525e79b78f72de1a3c3f31b41ab2e296993a6318e2f66a2f81f3e9ea8b3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
