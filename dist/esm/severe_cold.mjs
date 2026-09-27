export const name="severe_cold";
export const id="dl_8d1211d25ab3a7faac36";
export const url=new URL("../icons/severe_cold.svg?v=f94f6c16a601c83fb27fcb5d55f9c11ba5b9258a6893be2479868708a1c98e61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
